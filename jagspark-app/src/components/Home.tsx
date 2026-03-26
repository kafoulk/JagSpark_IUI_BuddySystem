import { useState } from "react"; // Added useState
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Home as HomeIcon, User, Heart } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Home() {
  const navigate = useNavigate();
  // Ensure toggleLike is exported from your context!
  const { compliments, isLiked, toggleLike } = useCompliments();
  
  // 1. Filter State: 'all' or 'liked'
  const [activeTab, setActiveTab] = useState<"all" | "liked">("all");

  const formatTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  // 2. Filter logic
  const displayedCompliments = compliments.filter((c) => {
    if (activeTab === "all") return true;
    return isLiked(c.id);
  });

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <div className="text-2xl tracking-tight">
          <span className="text-[#9B1C1C]">JAG</span>
          <span className="text-black">SPARK</span>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate("/home")} className="p-2 hover:bg-gray-100 rounded-full">
            <HomeIcon className="w-5 h-5" />
          </button>
          <button onClick={() => navigate("/profile")} className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* 3. Filter Tabs */}
        <div className="flex gap-4 mb-6 justify-center">
          <button 
            onClick={() => setActiveTab("all")}
            className={`pb-2 px-2 text-sm font-medium transition-all ${activeTab === "all" ? "border-b-2 border-[#9B1C1C] text-[#9B1C1C]" : "text-gray-400"}`}
          >
            All Compliments
          </button>
          <button 
            onClick={() => setActiveTab("liked")}
            className={`pb-2 px-2 text-sm font-medium transition-all ${activeTab === "liked" ? "border-b-2 border-[#9B1C1C] text-[#9B1C1C]" : "text-gray-400"}`}
          >
            Liked
          </button>
        </div>

        <h2 className="text-xl mb-4 text-center font-semibold">Campus Feed</h2>

        <div className="space-y-3">
          {displayedCompliments.map((compliment) => {
            const liked = isLiked(compliment.id);
            return (
              /* 4. REMOVED the onClick from this main div */
              <div
                key={compliment.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <p className="text-gray-800 mb-2 leading-relaxed">{compliment.text}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex gap-2 items-center">
                    <span className="italic font-medium text-gray-400">
                      {compliment.isAnonymous ? "Anonymous" : "Someone"}
                    </span>
                    <span>•</span>
                    <span>{formatTimeAgo(new Date(compliment.timestamp))}</span>
                  </div>

                  {/* 5. Heart Button: Now the only interactive part of the card */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Safety first
                      toggleLike(compliment.id);
                    }}
                    className="flex items-center gap-1.5 p-1 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all ${liked ? "text-red-500 fill-red-500 scale-110" : "text-gray-300"}`} 
                    />
                    <span className={liked ? "text-red-600 font-bold" : ""}>
                      {compliment.likes + (liked ? 1 : 0)}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fixed bottom-20 left-0 right-0 px-4">
          <Button
            onClick={() => navigate("/select-recipient")}
            className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-14 rounded-full shadow-lg"
          >
            Send a Compliment
          </Button>
        </div>
      </div>
    </div>
  );
}