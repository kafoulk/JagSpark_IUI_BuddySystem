import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Home as HomeIcon, User, Heart } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Home() {
  const navigate = useNavigate();
  // Added hasNewCompliments to the destructuring
  const { compliments, isLiked, toggleLike, hasNewCompliments } = useCompliments();
  
  const [activeTab, setActiveTab] = useState<"all" | "liked">("all");

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const displayedCompliments = compliments.filter((c) => {
    if (activeTab === "all") return true;
    return isLiked(c.id);
  });

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center">
          <h1 className="text-2xl tracking-tight font-bold">
            <span className="text-[#9B1C1C]">JAG</span>
            <span className="text-black">SPARK</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate("/home")} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <HomeIcon className="w-5 h-5 text-black" />
          </button>
          
          {/* PROFILE BUTTON WITH RED DOT */}
          <button 
            onClick={() => navigate("/profile")} 
            className="p-2 hover:bg-gray-100 rounded-full relative transition-colors"
          >
            <User className="w-5 h-5 text-black" />
            {hasNewCompliments && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#9B1C1C] border-2 border-white rounded-full animate-pulse" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Filter Tabs */}
        <div className="flex gap-6 mb-6 justify-center border-b border-gray-100">
          <button 
            onClick={() => setActiveTab("all")}
            className={`pb-3 px-2 text-sm font-bold transition-all ${activeTab === "all" ? "border-b-2 border-[#9B1C1C] text-[#9B1C1C]" : "text-gray-400 hover:text-gray-600"}`}
          >
            All Compliments
          </button>
          <button 
            onClick={() => setActiveTab("liked")}
            className={`pb-3 px-2 text-sm font-bold transition-all ${activeTab === "liked" ? "border-b-2 border-[#9B1C1C] text-[#9B1C1C]" : "text-gray-400 hover:text-gray-600"}`}
          >
            Liked
          </button>
        </div>

        <h2 className="text-lg mb-4 text-left font-bold text-gray-800 px-1">Campus Feed</h2>

        <div className="space-y-4">
          {displayedCompliments.length > 0 ? (
            displayedCompliments.map((compliment) => {
              const liked = isLiked(compliment.id);
              return (
                <div
                  key={compliment.id}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 transition-transform active:scale-[0.98]"
                >
                  <p className="text-gray-800 mb-4 leading-relaxed font-medium text-base">
                    {compliment.text}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-[#9B1C1C]/70">
                        {compliment.isAnonymous ? "Anonymous Spark" : "A Classmate"}
                      </span>
                      <span>•</span>
                      <span>{formatTimeAgo(new Date(compliment.timestamp))}</span>
                    </div>

                    {/* Heart Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(compliment.id);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${liked ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-400"}`}
                    >
                      <Heart 
                        className={`w-4 h-4 transition-all ${liked ? "fill-red-500 text-red-500" : ""}`} 
                      />
                      <span className="font-bold">
                        {/* Use the actual likes property from the object */}
                        {compliment.likes || 0}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">No compliments found here yet...</p>
            </div>
          )}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 left-0 right-0 px-6 z-30">
          <Button
            onClick={() => navigate("/select-recipient")}
            className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-16 rounded-2xl shadow-xl text-lg font-bold transition-all hover:scale-[1.02] active:scale-95"
          >
            Send a Spark
          </Button>
        </div>
      </div>
    </div>
  );
}