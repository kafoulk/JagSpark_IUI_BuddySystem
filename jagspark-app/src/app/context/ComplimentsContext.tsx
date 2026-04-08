import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { db, storage } from "../../firebase"; // Added storage here
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  updateDoc,
  doc,
  setDoc,
  increment 
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Added Storage imports
import type { Compliment } from "../data/mockData";

interface UserProfile {
  fullName: string;
  email: string;
  username: string;
  avatar?: string;
  pinnedCompliments?: string[]; 
}

interface ComplimentsContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => Promise<void>;
  updateUser: (updatedData: Partial<UserProfile>) => Promise<void>;
  uploadAvatar: (file: File) => Promise<string | undefined>; // 1. Added to Interface
  compliments: Compliment[];
  toggleLike: (complimentId: string) => Promise<void>;
  isLiked: (complimentId: string) => boolean;
  sendCompliment: (compliment: Omit<Compliment, "id" | "timestamp" | "likes">) => Promise<void>;
  receivedCompliments: Compliment[];
  sentCompliments: Compliment[];
  pinnedCompliments: string[];
  togglePin: (complimentId: string) => Promise<void>;
  hasNewCompliments: boolean;
  markAsSeen: () => void;
}

const ComplimentsContext = createContext<ComplimentsContextType | undefined>(undefined);

export function ComplimentsProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserProfile | null>(() => {
    const activeSession = localStorage.getItem("jagspark_active_session");
    return activeSession ? JSON.parse(activeSession) : null;
  });

  const [compliments, setCompliments] = useState<Compliment[]>([]);
  const [likedCompliments, setLikedCompliments] = useState<Set<string>>(new Set());

  // --- SYNC COMPLIMENTS ---
  useEffect(() => {
    const q = query(collection(db, "compliments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data(),
        timestamp: docSnap.data().timestamp?.toDate() || new Date(),
      })) as Compliment[];
      setCompliments(docs);
    });
    return () => unsubscribe();
  }, []);

  // --- SYNC USER PROFILE & PINS ---
  useEffect(() => {
    if (!user?.email) return;
    const userRef = doc(db, "users", user.email);
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data() as UserProfile;
        setUserState(userData);
        localStorage.setItem("jagspark_active_session", JSON.stringify(userData));
      }
    });
    return () => unsubscribe();
  }, [user?.email]);

  // --- 2. THE MISSING FUNCTION ---
  const uploadAvatar = async (file: File) => {
    if (!user?.email) return;

    try {
      // Create a storage reference
      const storageRef = ref(storage, `avatars/${user.email}`);
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file, {
      contentType: file.type, // Explicitly tell Firebase what kind of file it is
    });
      // Get the URL
      const photoURL = await getDownloadURL(snapshot.ref);
      // Update the user doc with the new URL
      await updateUser({ avatar: photoURL });
      return photoURL;
    } catch (e) {
      console.error("Firebase Storage Error:", e);
      throw e;
    }
  };

  const setUser = async (userData: UserProfile | null) => {
    if (userData) {
      const userRef = doc(db, "users", userData.email);
      await setDoc(userRef, {
        ...userData,
        pinnedCompliments: userData.pinnedCompliments || []
      }, { merge: true });
      setUserState(userData);
      localStorage.setItem("jagspark_active_session", JSON.stringify(userData));
    } else {
      setUserState(null);
      localStorage.removeItem("jagspark_active_session");
    }
  };

  const updateUser = async (updatedData: Partial<UserProfile>) => {
    if (!user?.email) return;
    await updateDoc(doc(db, "users", user.email), updatedData);
  };

  const togglePin = async (complimentId: string) => {
    if (!user?.email) return;
    const currentPins = user.pinnedCompliments || [];
    const newPins = currentPins.includes(complimentId)
      ? currentPins.filter(id => id !== complimentId)
      : [complimentId, ...currentPins];
    await updateDoc(doc(db, "users", user.email), { pinnedCompliments: newPins });
  };

  const sendCompliment = async (complimentData: any) => {
    await addDoc(collection(db, "compliments"), {
      ...complimentData,
      senderId: user?.email || "anonymous",
      likes: 0,
      timestamp: serverTimestamp(),
    });
  };

  const toggleLike = async (complimentId: string) => {
    if (!user) return;
    const isCurrentlyLiked = likedCompliments.has(complimentId);
    await updateDoc(doc(db, "compliments", complimentId), {
      likes: increment(isCurrentlyLiked ? -1 : 1)
    });
    setLikedCompliments(prev => {
      const next = new Set(prev);
      if (isCurrentlyLiked) next.delete(complimentId);
      else next.add(complimentId);
      return next;
    });
  };

  const receivedCompliments = compliments.filter(c => 
    c.recipientId === user?.email || c.recipientId === user?.username
  );

  const sentCompliments = compliments.filter(c => 
    (c as any).senderId === user?.email || (c as any).senderId === user?.username
  );

  return (
    <ComplimentsContext.Provider
      value={{
        user, setUser, updateUser, uploadAvatar, // 3. Added to Value
        compliments, toggleLike, 
        isLiked: (id) => likedCompliments.has(id),
        sendCompliment, receivedCompliments, sentCompliments,
        pinnedCompliments: user?.pinnedCompliments || [],
        togglePin, hasNewCompliments: false, markAsSeen: () => {},
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