import { createContext, useContext, useState, ReactNode } from "react";
import { recentCompliments as initialCompliments } from "../data/mockData";
import type { Compliment } from "../data/mockData";

interface ComplimentsContextType {
  compliments: Compliment[];
  toggleLike: (complimentId: string) => void;
  isLiked: (complimentId: string) => boolean;
  sendCompliment: (compliment: Omit<Compliment, "id" | "timestamp" | "likes">) => void;
  receivedCompliments: Compliment[];
  sentCompliments: Compliment[];
  pinnedCompliments: string[];
  togglePin: (complimentId: string) => void;
}

const ComplimentsContext = createContext<ComplimentsContextType | undefined>(
  undefined
);

export function ComplimentsProvider({ children }: { children: ReactNode }) {
  const [compliments, setCompliments] = useState(initialCompliments);
  const [likedCompliments, setLikedCompliments] = useState<Set<string>>(
    new Set()
  );
  const [sentCompliments, setSentCompliments] = useState<Compliment[]>([]);
  const [receivedCompliments, setReceivedCompliments] = useState<Compliment[]>([
    ...initialCompliments,
  ]);
  const [pinnedCompliments, setPinnedCompliments] = useState<string[]>([]);

  const toggleLike = (complimentId: string) => {
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

  const isLiked = (complimentId: string) => {
    return likedCompliments.has(complimentId);
  };

  const sendCompliment = (compliment: Omit<Compliment, "id" | "timestamp" | "likes">) => {
    const newCompliment: Compliment = {
      ...compliment,
      id: `sent-${Date.now()}`,
      timestamp: new Date(),
      likes: 0,
    };
    
    setSentCompliments((prev) => [newCompliment, ...prev]);
    setCompliments((prev) => [newCompliment, ...prev]);
  };

  const togglePin = (complimentId: string) => {
    setPinnedCompliments((prev) => {
      if (prev.includes(complimentId)) {
        return prev.filter((id) => id !== complimentId);
      } else {
        return [complimentId, ...prev];
      }
    });
  };

  return (
    <ComplimentsContext.Provider
      value={{
        compliments,
        toggleLike,
        isLiked,
        sendCompliment,
        receivedCompliments,
        sentCompliments,
        pinnedCompliments,
        togglePin,
      }}
    >
      {children}
    </ComplimentsContext.Provider>
  );
}

export function useCompliments() {
  const context = useContext(ComplimentsContext);
  if (!context) {
    throw new Error("useCompliments must be used within ComplimentsProvider");
  }
  return context;
}