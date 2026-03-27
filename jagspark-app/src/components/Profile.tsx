import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Home as HomeIcon, X, Pencil, Check } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Profile() {
  const navigate = useNavigate();
  const {
    user,
    setUser,
    updateUser,
    receivedCompliments,
    sentCompliments,
    pinnedCompliments,
    togglePin,
    markAsSeen,
  } = useCompliments();

  // --- EDITING STATE ---
  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState(user?.fullName || "");

  // Clear notifications when page opens
  useEffect(() => {
    markAsSeen();
  }, [receivedCompliments.length, markAsSeen]);

  // Sync local state if the user object changes
  useEffect(() => {
    if (user) setEditName(user.fullName);
  }, [user]);

  const handleSaveName = () => {
    if (editName.trim()) {
      updateUser({ fullName: editName.trim() });
    }
    setIsEditingName(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("jagspark_active_session");
    navigate("/");
  };

  // Dynamic User Data logic
  const displayName = user?.fullName || "Guest User";
  const displayUsername = user?.username || "@guest";
  const userInitial = displayName.charAt(0).toUpperCase();

  const pinned = receivedCompliments.filter((c) => pinnedCompliments.includes(c.id));
  const unpinned = receivedCompliments.filter((c) => !pinnedCompliments.includes(c.id));
  const totalLikes = receivedCompliments.reduce((sum, c) => sum + (c.likes || 0), 0);

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex justify-between items-center sticky top-0 z-10">
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
          <HomeIcon className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Profile Picture / Avatar */}
      <div className="flex flex-col items-center mt-6 px-6">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-[#9B1C1C] flex items-center justify-center text-white text-4xl font-bold shadow-md border-4 border-white">
          {user?.avatar ? (
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <span>{userInitial}</span>
          )}
        </div>

        {/* Name Section with Pencil Icon */}
        <div className="w-full mt-6 text-center max-w-sm mx-auto">
          {isEditingName ? (
            <div className="flex items-center justify-center gap-2 border-b-2 border-[#9B1C1C] max-w-[250px] mx-auto">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                className="bg-transparent outline-none py-1 text-xl font-bold text-gray-900 text-center w-full"
              />
              <button 
                onClick={handleSaveName}
                className="p-1 text-green-600 hover:scale-110 transition-transform"
              >
                <Check className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="inline-block relative">
              <h1 className="text-2xl font-bold text-gray-900 pr-2">
                {displayName}
              </h1>
              <button
                onClick={() => setIsEditingName(true)}
                className="absolute -top-1 -right-6 p-1 text-gray-400 hover:text-[#9B1C1C] transition-colors"
                title="Edit Name"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <p className="text-gray-400 text-sm mt-1">{displayUsername}</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-4 mt-10 px-4">
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{sentCompliments.length}</p>
          <p className="text-[10px] text-gray-700 uppercase tracking-wide font-bold">Sent</p>
        </div>
        <div className="h-[91px] w-px bg-[#D9D9D9]" />
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{receivedCompliments.length}</p>
          <p className="text-[10px] text-gray-700 uppercase tracking-wide font-bold">Received</p>
        </div>
        <div className="h-[91px] w-px bg-[#D9D9D9]" />
        <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
          <p className="text-3xl font-normal">{totalLikes}</p>
          <p className="text-[10px] text-gray-700 uppercase tracking-wide font-bold">Likes</p>
        </div>
      </div>

      {/* Pinned Compliments */}
      {pinned.length > 0 && (
        <div className="px-4 mt-10">
          <h2 className="text-lg font-semibold mb-3">Pinned Compliments:</h2>
          <div className="space-y-3">
            {pinned.map((compliment) => (
              <div key={compliment.id} className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative">
                <button onClick={() => togglePin(compliment.id)} className="absolute top-3 right-3 p-1">
                  <X className="w-4 h-4 text-gray-400 hover:text-black" />
                </button>
                <p className="text-lg pr-8 leading-snug">{compliment.text}</p>
                <p className="text-gray-400 text-sm mt-2">
                  -{compliment.isAnonymous ? "anonymous" : "a classmate"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Compliments */}
      <div className="px-4 mt-8 pb-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-900">Recent Compliments:</h2>
        <div className="space-y-3">
          {unpinned.length > 0 ? (
            unpinned.map((compliment) => (
              <div key={compliment.id} className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative">
                <button onClick={() => togglePin(compliment.id)} className="absolute top-3 right-3 p-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      pinnedCompliments.includes(compliment.id) ? "bg-[#9B1C1C]" : "bg-gray-300"
                    }`}
                  />
                </button>
                <p className="text-lg pr-8 leading-snug">{compliment.text}</p>
                <p className="text-gray-400 text-sm mt-2">
                  -{compliment.isAnonymous ? "anonymous" : "a classmate"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm italic">No compliments yet.</p>
          )}
        </div>
      </div>

      <div className="px-4 mt-4">
        <button
          onClick={handleLogout}
          className="w-full text-center text-[#9B1C1C] underline text-base font-semibold py-2"
        >
          Log out
        </button>
      </div>
    </div>
  );
}