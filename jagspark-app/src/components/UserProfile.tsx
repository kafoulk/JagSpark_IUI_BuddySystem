import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Home as HomeIcon } from "lucide-react";
import { userProfiles } from "../app/data/mockData";

export function UserProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const profile = userProfiles[userId || ""] || {
    id: userId,
    name: "User",
    stats: { sent: 14, received: 12, likes: 6 },
    pinnedCompliments: [],
    recentCompliments: [],
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
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

      {/* Profile Content */}
      <div className="p-4">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center text-white text-3xl mb-3">
            {profile.name.charAt(0)}
          </div>
          <h2 className="text-xl">{profile.name}</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl mb-1">{profile.stats.sent}</div>
            <div className="text-sm text-gray-600">Sent</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl mb-1">{profile.stats.received}</div>
            <div className="text-sm text-gray-600">Received</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl mb-1">{profile.stats.likes}</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>
        </div>

        {/* Pinned Compliments */}
        {profile.pinnedCompliments.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm text-gray-600 mb-3">Pinned Compliments:</h3>
            <div className="space-y-3">
              {profile.pinnedCompliments.map((compliment: any) => (
                <div
                  key={compliment.id}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <p className="text-gray-800 mb-2">{compliment.text}</p>
                  <p className="text-sm text-gray-500 italic">
                    {compliment.isAnonymous ? "Anonymous" : "Someone"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Compliments */}
        {profile.recentCompliments.length > 0 && (
          <div>
            <h3 className="text-sm text-gray-600 mb-3">Recent Compliments:</h3>
            <div className="space-y-3">
              {profile.recentCompliments.map((compliment: any) => (
                <div
                  key={compliment.id}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <p className="text-gray-800 mb-2">{compliment.text}</p>
                  <p className="text-sm text-gray-500 italic">
                    {compliment.isAnonymous ? "Anonymous" : "Someone"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
