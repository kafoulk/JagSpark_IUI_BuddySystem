import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft} from "lucide-react";
import { users as mockUsers } from "../app/data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCompliments } from "../app/context/ComplimentsContext";

export function SelectRecipient() {
  const navigate = useNavigate();
  const { user: currentUser } = useCompliments();
  const [searchQuery] = useState("");

  const dbData = localStorage.getItem("jagspark_users_db");
  const registeredUsers = dbData ? JSON.parse(dbData) : [];

  // 2. Format registered users - WE ARE NOW USING EMAIL AS THE ID
  const formattedRegisteredUsers = registeredUsers.map((u: any) => ({
    id: u.email, // <--- CHANGE THIS from u.username to u.email
    name: u.fullName,
    avatar: "", 
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
      {/* ... Header stays the same ... */}

      <div className="p-4">
        <h2 className="text-xl mb-6 text-center text-black">Select who to compliment</h2>

        {/* ... Search Input stays the same ... */}

        <div>
          <h3 className="text-sm text-gray-600 mb-3 font-medium px-2">Recent Classmates</h3>
          <div className="space-y-2">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                // WE USE encodeURIComponent to make sure the email is safe for the URL
                onClick={() => navigate(`/write-compliment/${encodeURIComponent(user.id)}`)}
                className="w-full bg-white rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                {/* Avatar */}
                {user.avatar ? (
                  <ImageWithFallback
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#9B1C1C] flex items-center justify-center text-white flex-shrink-0 font-bold">
                    {user.name.charAt(0)}
                  </div>
                )}
                
                {/* User Info */}
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  {user.lastSeen && (
                    <div className="text-sm text-gray-400">{user.lastSeen}</div>
                  )}
                </div>
                <ChevronLeft className="w-5 h-5 text-gray-300 rotate-180" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}