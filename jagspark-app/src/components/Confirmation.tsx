import { useNavigate, useParams } from "react-router";
import { Button } from "./ui/button";
import { ChevronLeft, Home as HomeIcon } from "lucide-react";

export function Confirmation() {
  const navigate = useNavigate();
  // We extract 'recipientName' from the URL parameters
  const params = useParams();
  
  // This handles both common naming conventions for the route param
  const displayName = params.recipientName || params.id || "Student";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <HomeIcon className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-100px)]">
        <div className="bg-[#FFF9E9] border border-[#D2D2D2] rounded-3xl p-8 w-full max-w-md text-center shadow-sm">
          <h1 className="text-2xl mb-8 font-bold text-[#9B1C1C]">Congratulations!</h1>

          {/* Celebration Image - Placeholder for your asset */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center border-4 border-[#9B1C1C]/10">
               <span className="text-6xl">🎉</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3 font-semibold text-gray-900">Compliment Sent!</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your kind words are on the way to
              <br />
              <span className="font-bold text-lg text-[#9B1C1C] block mt-2">
                {decodeURIComponent(displayName)} 
              </span>
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/select-recipient")}
          className="w-full max-w-md mt-6 bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-14 rounded-full font-bold text-lg"
        >
          Send another
        </Button>
      </div>
    </div>
  );
}