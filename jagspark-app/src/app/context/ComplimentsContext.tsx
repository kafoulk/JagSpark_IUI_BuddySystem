import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { recentCompliments as initialCompliments } from "../data/mockData";
import type { Compliment } from "../data/mockData";

interface UserProfile {
  fullName: string;
  email: string;
  username: string;
  avatar?: string; // Added avatar support
}

interface ComplimentsContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  updateUser: (updatedData: Partial<UserProfile>) => void; // New update function
  compliments: Compliment[];
  toggleLike: (complimentId: string) => void;
  isLiked: (complimentId: string) => boolean;
  sendCompliment: (compliment: Omit<Compliment, "id" | "timestamp" | "likes">) => void;
  receivedCompliments: Compliment[];
  sentCompliments: Compliment[];
  pinnedCompliments: string[];
  togglePin: (complimentId: string) => void;
  hasNewCompliments: boolean;
  markAsSeen: () => void;
}

const ComplimentsContext = createContext<ComplimentsContextType | undefined>(undefined);

export function ComplimentsProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserProfile | null>(() => {
    const activeSession = localStorage.getItem("jagspark_active_session");
    return activeSession ? JSON.parse(activeSession) : null;
  });

  const [compliments, setCompliments] = useState<Compliment[]>(() => {
    const saved = localStorage.getItem("jagspark_compliments_db");
    return saved ? JSON.parse(saved) : initialCompliments;
  });

  const [likedCompliments, setLikedCompliments] = useState<Set<string>>(new Set());

  const [pinnedCompliments, setPinnedCompliments] = useState<string[]>(() => {
    const savedPins = localStorage.getItem("jagspark_pinned_db");
    return savedPins ? JSON.parse(savedPins) : [];
  });

  const [lastSeenCount, setLastSeenCount] = useState<number>(0);

  // Sync Likes and Seen Count when User changes
  useEffect(() => {
    if (user) {
      const savedLikes = localStorage.getItem(`jagspark_likes_${user.email}`);
      setLikedCompliments(new Set(savedLikes ? JSON.parse(savedLikes) : []));
      
      const savedCount = localStorage.getItem(`jagspark_seen_count_${user.email}`);
      setLastSeenCount(savedCount ? parseInt(savedCount) : 0);
    } else {
      setLikedCompliments(new Set());
    }
  }, [user?.email]); // Depend on email to avoid unnecessary re-runs

  // Persist Likes whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`jagspark_likes_${user.email}`, JSON.stringify(Array.from(likedCompliments)));
    }
  }, [likedCompliments, user]);

  useEffect(() => {
    localStorage.setItem("jagspark_compliments_db", JSON.stringify(compliments));
  }, [compliments]);

  useEffect(() => {
    localStorage.setItem("jagspark_pinned_db", JSON.stringify(pinnedCompliments));
  }, [pinnedCompliments]);

  const receivedCompliments = compliments.filter(c => 
    c.recipientId === user?.email || c.recipientId === user?.username
  );

  const sentCompliments = compliments.filter(c => 
    (c as any).senderId === user?.email || (c as any).senderId === user?.username
  );

  const hasNewCompliments = user ? receivedCompliments.length > lastSeenCount : false;

  const setUser = (userData: UserProfile | null) => {
    setUserState(userData);
    if (userData) {
      localStorage.setItem("jagspark_active_session", JSON.stringify(userData));
    } else {
      localStorage.removeItem("jagspark_active_session");
    }
  };

  // --- NEW: UPDATE USER LOGIC ---
  const updateUser = (updatedData: Partial<UserProfile>) => {
    if (!user) return;

    const newUserData = { ...user, ...updatedData };
    setUserState(newUserData);

    // 1. Update session
    localStorage.setItem("jagspark_active_session", JSON.stringify(newUserData));

    // 2. Update permanent users database so changes persist across logouts
    const usersDB = JSON.parse(localStorage.getItem("jagspark_users_db") || "[]");
    const updatedDB = usersDB.map((u: UserProfile) => 
      u.email === user.email ? { ...u, ...updatedData } : u
    );
    localStorage.setItem("jagspark_users_db", JSON.stringify(updatedDB));
  };

  const toggleLike = (complimentId: string) => {
    if (!user) return;

    setCompliments((prev) =>
      prev.map((c) => {
        if (c.id === complimentId) {
          const isCurrentlyLiked = likedCompliments.has(complimentId);
          return {
            ...c,
            likes: (c.likes || 0) + (isCurrentlyLiked ? -1 : 1),
          };
        }
        return c;
      })
    );

    setLikedCompliments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(complimentId)) {
        newSet.delete(complimentId);
      } else {
        newSet.add(complimentId);
      }
      return newSet;
    });
  };

  const markAsSeen = () => {
    if (!user) return;
    setLastSeenCount(receivedCompliments.length);
    localStorage.setItem(`jagspark_seen_count_${user.email}`, receivedCompliments.length.toString());
  };

  const isLiked = (complimentId: string) => likedCompliments.has(complimentId);

  const sendCompliment = (complimentData: Omit<Compliment, "id" | "timestamp" | "likes">) => {
    const newCompliment: Compliment = {
      ...complimentData,
      id: `sent-${Date.now()}`,
      timestamp: new Date(),
      likes: 0,
      senderId: user?.email || "anonymous" 
    } as any;
    setCompliments((prev) => [newCompliment, ...prev]);
  };

  const togglePin = (complimentId: string) => {
    setPinnedCompliments((prev) => 
      prev.includes(complimentId) ? prev.filter(id => id !== complimentId) : [complimentId, ...prev]
    );
  };

  return (
    <ComplimentsContext.Provider
      value={{
        user, setUser, updateUser, compliments, toggleLike, isLiked,
        sendCompliment, receivedCompliments, sentCompliments,
        pinnedCompliments, togglePin, hasNewCompliments, markAsSeen,
      }}
    >
      {children}
    </ComplimentsContext.Provider>
  );
}

export function useCompliments() {
  const context = useContext(ComplimentsContext);
  if (!context) throw new Error("useCompliments must be used within ComplimentsProvider");
  return context;
}