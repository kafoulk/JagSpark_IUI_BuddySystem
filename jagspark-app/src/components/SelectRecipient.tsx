import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Home as HomeIcon, User, Search } from "lucide-react";
import { users } from "../app/data/mockData";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SelectRecipient() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
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

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl mb-6 text-center">Select who to compliment</h2>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search IU Students"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-gray-200 h-12 rounded-full"
          />
        </div>

        {/* Recent Classmates */}
        <div>
          <h3 className="text-sm text-gray-600 mb-3">Recent Classmates</h3>
          <div className="space-y-2">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => navigate(`/write-compliment/${user.id}`)}
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center text-white flex-shrink-0">
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
                <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}