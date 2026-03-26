import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "./ui/button";
import { ChevronLeft, Home as HomeIcon } from "lucide-react";
import imgCelebration from "figma:asset/befb907d00ce6fd5ae8857ebd8e09b984140a51c.png";

export function Confirmation() {
  const navigate = useNavigate();
  const { recipientName } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <HomeIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-100px)]">
        <div className="bg-[#FFF9E9] border border-[#D2D2D2] rounded-3xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl mb-8">Congratulations</h1>

          {/* Celebration Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={imgCelebration} 
              alt="Celebration" 
              className="w-56 h-56 object-contain"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3">Compliment Sent!</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your kind words are on the way to
              <br />
              <span className="font-semibold text-gray-900">
                {decodeURIComponent(recipientName || "")} 🙂
              </span>
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/select-recipient")}
          className="w-full max-w-md mt-6 bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-14 rounded-full"
        >
          Send another
        </Button>
      </div>
    </div>
  );
}