import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Home as HomeIcon, User, Heart, X } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";
import { Button } from "./ui/button";

export function ViewCompliment() {
  const navigate = useNavigate();
  const { complimentId } = useParams();
  const { compliments, toggleLike, isLiked } = useCompliments();
  const [showBlockDialog, setShowBlockDialog] = useState(false);

  const compliment = compliments.find((c) => c.id === complimentId);

  if (!compliment) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <p>Compliment not found</p>
      </div>
    );
  }

  const liked = isLiked(complimentId || "");

  const handleLike = () => {
    if (complimentId) {
      toggleLike(complimentId);
    }
  };

  const handleReply = () => {
    navigate("/select-recipient");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Logo */}
      <div className="flex justify-center pt-16">
        <div className="w-[176px] h-[176px]">
          <img
            src=""
            alt="JAGSPARK Logo"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>

      {/* Header Icons */}
      <div className="absolute top-4 right-4 flex gap-3">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <User className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pt-8">
        {/* Compliment Card Container */}
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-[20px] p-8 mb-6 relative">
          <h2 className="text-[32px] font-semibold text-center mb-6">
            You received a compliment!
          </h2>

          {/* Inner White Card */}
          <div className="bg-white border border-[#D9D9D9] rounded-[13px] p-6">
            <p className="text-2xl text-center mb-4">{compliment.text}</p>
            <p className="text-[#BEBEBE] text-base text-left">-anonymous</p>
          </div>

          {/* Likes */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Heart
              className={`w-5 h-5 cursor-pointer ${
                liked ? "fill-red-500 text-red-500" : "fill-red-500 text-red-500"
              }`}
              onClick={handleLike}
            />
            <p className="text-base">
              <span className="font-bold">{compliment.likes + (liked ? 1 : 0)} People</span>{" "}
              liked this
            </p>
          </div>
        </div>

        {/* Report or Block */}
        <button
          onClick={() => setShowBlockDialog(true)}
          className="w-full text-center text-base font-semibold underline mb-6"
        >
          Report or Block
        </button>

        {/* Send a Reply Button */}
        <Button
          onClick={handleReply}
          className="w-full max-w-[259px] mx-auto block bg-[#B22222] hover:bg-[#7D1616] text-white h-12 rounded-full border border-[#720000]"
        >
          Send a Reply
        </Button>
      </div>

      {/* Block Dialog */}
      {showBlockDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowBlockDialog(false)}
          />

          {/* Dialog */}
          <div className="relative bg-[rgba(0,0,0,0.8)] border border-[#D9D9D9] rounded-[20px] w-full max-w-[359px] p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowBlockDialog(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white border border-[#D9D9D9] flex items-center justify-center"
            >
              <X className="w-4 h-4 text-[#B22222]" />
            </button>

            {/* Content */}
            <p className="text-white text-center text-base mb-4">
              You will no longer receive messages
              <br />
              or see activity from this user.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}