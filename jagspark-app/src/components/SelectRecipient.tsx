import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { users as mockUsers } from "../app/data/mockData";
import { useCompliments } from "../app/context/ComplimentsContext";

export function SelectRecipient() {
  const navigate = useNavigate();
  const { user: currentUser } = useCompliments();
  const [searchQuery] = useState("");

  const dbData = localStorage.getItem("jagspark_users_db");
  const registeredUsers = dbData ? JSON.parse(dbData) : [];

  // 2. Format registered users - WE ARE NOW USING EMAIL AS THE ID
  const formattedRegisteredUsers = registeredUsers.map((u: any) => ({
    id: u.email,
    name: u.fullName,
    avatar: u.avatar || "", 
    lastSeen: "Online Now",
    email: u.email
  }));

  const allAvailableUsers = [...formattedRegisteredUsers, ...mockUsers].filter(
    (u) => u.email !== currentUser?.email
  );

  const filteredUsers = allAvailableUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* --- ADDED HEADER WITH BACK ARROW --- */}
      <div className="bg-white px-4 py-4 flex items-center sticky top-0 z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>
      {/* ------------------------------------ */}

      <div className="p-4">
        <h2 className="text-xl mb-6 text-center text-black font-semibold">Select who to compliment</h2>

        {/* Search Input would go here */}

        <div>
          <h3 className="text-sm text-gray-600 mb-3 font-medium px-2">Recent Classmates</h3>
          <div className="space-y-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => navigate(`/write-compliment/${encodeURIComponent(user.id)}`)}
                  className="w-full bg-white rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                >
                  {/* Avatar */}
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#9B1C1C] flex items-center justify-center text-white flex-shrink-0 font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  
                  {/* User Info */}
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    {user.lastSeen && (
                      <div className="text-sm text-gray-400">{user.lastSeen}</div>
                    )}
                  </div>
                  
                  {/* Right Arrow indicating navigation */}
                  <ChevronLeft className="w-5 h-5 text-gray-300 rotate-180" />
                </button>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-10">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}