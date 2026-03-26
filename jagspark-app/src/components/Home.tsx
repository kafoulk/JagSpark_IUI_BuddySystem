import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Home as HomeIcon, User, Heart } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Home() {
  const navigate = useNavigate();
  const { compliments, isLiked } = useCompliments();

  const formatTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <div className="text-2xl tracking-tight">
          <span className="text-[#9B1C1C]">JAG</span>
          <span className="text-black">SPARK</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <HomeIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-xl mb-4 text-center">Recent Compliments on Campus</h2>

        {/* Compliments Feed */}
        <div className="space-y-3">
          {compliments.map((compliment) => {
            const liked = isLiked(compliment.id);
            return (
              <div
                key={compliment.id}
                onClick={() => navigate(`/view-compliment/${compliment.id}`)}
                className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800 mb-2">{compliment.text}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="italic">
                    {compliment.isAnonymous ? "Anonymous" : "Someone"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Heart className={`w-4 h-4 ${liked ? "text-red-500 fill-red-500" : "text-red-500"}`} />
                    <span>{compliment.likes + (liked ? 1 : 0)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Send Compliment Button */}
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