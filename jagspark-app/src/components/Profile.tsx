import { useNavigate } from "react-router";
import { ChevronLeft, Home as HomeIcon, X } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";
import imgRectangle from "figma:asset/3f5e9ccf479c628a0f6b1ad462e4d72f38718102.png";
import imgPin from "figma:asset/edd0208aaf8031da25aacd97033a10d72628a6de.png";

export function Profile() {
  const navigate = useNavigate();
  const {
    receivedCompliments,
    sentCompliments,
    pinnedCompliments,
    togglePin,
    isLiked,
  } = useCompliments();

  const pinned = receivedCompliments.filter((c) =>
    pinnedCompliments.includes(c.id)
  );
  const unpinned = receivedCompliments.filter(
    (c) => !pinnedCompliments.includes(c.id)
  );

  const totalLikes = receivedCompliments.reduce((sum, c) => {
    return sum + c.likes + (isLiked(c.id) ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-black hover:text-gray-700"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <HomeIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center mt-8">
        <div className="w-[119px] h-[119px] rounded-full overflow-hidden bg-gray-200">
          <img
            src={imgRectangle}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Username */}
      <div className="text-center mt-4">
        <h1 className="text-xl font-semibold">Maya Robinson</h1>
        <p className="text-gray-400 text-sm mt-1">@iamrobinson</p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-4 mt-8 px-4">
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{sentCompliments.length}</p>
          <p className="text-sm text-gray-700 mt-1">Sent</p>
        </div>
        <div className="h-[91px] w-px bg-[#D9D9D9]" />
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{receivedCompliments.length}</p>
          <p className="text-sm text-gray-700 mt-1">Received</p>
        </div>
        <div className="h-[91px] w-px bg-[#D9D9D9]" />
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{totalLikes}</p>
          <p className="text-sm text-gray-700 mt-1">Likes</p>
        </div>
      </div>

      {/* Pinned Compliments */}
      {pinned.length > 0 && (
        <div className="px-4 mt-8">
          <h2 className="text-lg font-semibold mb-3">Pinned Compliments:</h2>
          <div className="space-y-3">
            {pinned.map((compliment) => (
              <div
                key={compliment.id}
                className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative"
              >
                <button
                  onClick={() => togglePin(compliment.id)}
                  className="absolute top-3 right-3 w-5 h-5"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                <p className="text-lg pr-8">{compliment.text}</p>
                <p className="text-gray-400 text-sm mt-2">-anonymous</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Compliments */}
      <div className="px-4 mt-8 pb-8">
        <h2 className="text-lg font-semibold mb-3">Recent Compliments:</h2>
        <div className="space-y-3">
          {unpinned.slice(0, 3).map((compliment) => (
            <div
              key={compliment.id}
              className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative"
            >
              <button
                onClick={() => togglePin(compliment.id)}
                className="absolute top-3 right-3 w-6 h-6"
              >
                <img src={imgPin} alt="Pin" className="w-full h-full" />
              </button>
              <p className="text-lg pr-8">{compliment.text}</p>
              <p className="text-gray-400 text-sm mt-2">-anonymous</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate("/")}
          className="w-full text-center text-[#9B1C1C] underline text-base font-semibold"
        >
          Log out
        </button>
      </div>
    </div>
  );
}