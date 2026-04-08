import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Home as HomeIcon, X, Pencil, Check, Camera, Loader2 } from "lucide-react";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    user,
    setUser,
    updateUser,
    uploadAvatar, // Ensure this exists in ComplimentsContext.tsx
    receivedCompliments,
    sentCompliments,
    pinnedCompliments,
    togglePin,
    markAsSeen,
  } = useCompliments();

  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState(user?.fullName || "");
  const [isUploading, setIsUploading] = useState(false);

  // Sync notifications
  useEffect(() => {
    markAsSeen();
  }, [receivedCompliments.length, markAsSeen]);

  // Sync name field with database
  useEffect(() => {
    if (user) setEditName(user.fullName);
  }, [user]);

  const handleSaveName = () => {
    if (editName.trim()) {
      updateUser({ fullName: editName.trim() });
    }
    setIsEditingName(false);
  };

  const handlePhotoClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("File is too large! Please select an image under 1MB.");
        return;
      }
      setIsUploading(true);
      try {
        await (uploadAvatar as any)(file);
      } catch (error) {
        console.error("Upload failed", error);
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  // Logic Helpers
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
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-black">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
        <button onClick={() => navigate("/home")} className="p-2 hover:bg-gray-100 rounded-full">
          <HomeIcon className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center mt-6 px-6">
        <div className="relative">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-[#9B1C1C] flex items-center justify-center text-white text-4xl font-bold shadow-md border-4 border-white relative">
            {isUploading && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
              </div>
            )}
            {user?.avatar ? (
              <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span>{userInitial}</span>
            )}
          </div>
          <button
            onClick={handlePhotoClick}
            disabled={isUploading}
            className="absolute -top-1 -right-2 p-2 bg-white rounded-full shadow-lg border border-gray-100 text-[#9B1C1C]"
          >
            <Camera className="w-4 h-4" />
          </button>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
        </div>

        {/* Name Editor */}
        <div className="w-full mt-6 text-center max-w-sm mx-auto">
          {isEditingName ? (
            <div className="flex items-center justify-center gap-2 border-b-2 border-[#9B1C1C] max-w-[250px] mx-auto">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                autoFocus
                className="bg-transparent outline-none py-1 text-xl font-bold text-center w-full"
              />
              <button onClick={handleSaveName} className="p-1 text-green-600"><Check className="w-5 h-5" /></button>
            </div>
          ) : (
            <div className="inline-block relative">
              <h1 className="text-2xl font-bold text-gray-900 pr-2">{displayName}</h1>
              <button onClick={() => setIsEditingName(true)} className="absolute -top-1 -right-6 p-1 text-gray-400">
                <Pencil className="w-4 h-4" />
              </button>
              <p className="text-gray-400 text-sm mt-1">{displayUsername}</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center gap-4 mt-10 px-4">
        {[
          { label: "Sent", value: sentCompliments.length },
          { label: "Received", value: receivedCompliments.length },
          { label: "Likes", value: totalLikes }
        ].map((stat, idx) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl w-[91px] h-[91px] flex flex-col items-center justify-center">
              <p className="text-3xl font-normal">{stat.value}</p>
              <p className="text-[10px] text-gray-700 uppercase tracking-wide font-bold">{stat.label}</p>
            </div>
            {idx < 2 && <div className="h-[91px] w-px bg-[#D9D9D9]" />}
          </div>
        ))}
      </div>

      {/* Pinned Section */}
      {pinned.length > 0 && (
        <div className="px-4 mt-10">
          <h2 className="text-lg font-semibold mb-3">Pinned Compliments:</h2>
          <div className="space-y-3">
            {pinned.map((c) => (
              <div key={c.id} className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative">
                <button onClick={() => togglePin(c.id)} className="absolute top-3 right-3 p-1">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
                <p className="text-lg pr-8 leading-snug">{c.text}</p>
                <p className="text-gray-400 text-sm mt-2">-{c.isAnonymous ? "anonymous" : "a classmate"}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Section */}
      <div className="px-4 mt-8 pb-8">
        <h2 className="text-lg font-semibold mb-3">Recent Sparks:</h2>
        <div className="space-y-3">
          {unpinned.length > 0 ? unpinned.map((c) => (
            <div key={c.id} className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-2xl p-4 relative" onClick={() => togglePin(c.id)}>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-300" />
              <p className="text-lg pr-8 leading-snug">{c.text}</p>
              <p className="text-gray-400 text-sm mt-2">-{c.isAnonymous ? "anonymous" : "a classmate"}</p>
            </div>
          )) : <p className="text-gray-400 text-sm italic">No recent compliments.</p>}
        </div>
      </div>

      <button onClick={handleLogout} className="w-full text-[#9B1C1C] underline font-semibold py-4">
        Log out
      </button>
    </div>
  );
}