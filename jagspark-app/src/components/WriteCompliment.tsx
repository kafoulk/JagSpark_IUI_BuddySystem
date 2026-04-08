import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Home as HomeIcon, User } from "lucide-react";
import { users as mockUsers, complimentSuggestions } from "../app/data/mockData";
import { useCompliments } from "../app/context/ComplimentsContext";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

export function WriteCompliment() {
  const navigate = useNavigate();
  
  // MATCHING YOUR ROUTE: Grab 'userId' from the URL
  const { userId } = useParams<{ userId: string }>();
  
  const { sendCompliment } = useCompliments();
  const [message, setMessage] = useState("");
  const [sendAnonymously, setSendAnonymously] = useState(true);

  // Find the student based on the userId in the URL
  const recipient = useMemo(() => {
    if (!userId) return null;

    const dbData = localStorage.getItem("jagspark_users_db");
    const registeredUsers = dbData ? JSON.parse(dbData) : [];

    // Format registered users
    const formattedReg = registeredUsers.map((u: any) => ({
      id: String(u.email || u.username),
      name: u.fullName,
      email: u.email
    }));

    const allUsers = [...formattedReg, ...mockUsers];
    const decodedId = decodeURIComponent(userId).toLowerCase().trim();

    return allUsers.find(u => 
      String(u.id).toLowerCase().trim() === decodedId || 
      String((u as any).email || "").toLowerCase().trim() === decodedId ||
      String((u as any).username || "").toLowerCase().trim() === decodedId
    );
  }, [userId]);

  const handleSend = () => {
    if (message.trim() && recipient) {
      sendCompliment({
        text: message,
        recipientId: recipient.id,
        recipientName: recipient.name,
        isAnonymous: sendAnonymously,
      });
      // This matches your route: path: "/confirmation/:recipientName"
      navigate(`/confirmation/${encodeURIComponent(recipient.name)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <div className="flex gap-3">
          <button onClick={() => navigate("/home")} className="p-2 hover:bg-gray-100 rounded-full">
            <HomeIcon className="w-5 h-5 text-black" />
          </button>
          <button onClick={() => navigate("/profile")} className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl mb-6 text-center text-black font-semibold">Send a Spark</h2>

        <div className="mb-6">
          <label className="text-sm text-gray-900 mb-2 block font-medium">To:</label>
          <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-full px-4 py-2.5 text-gray-800 font-medium">
            {/* If found, show name. If not, show what the URL gave us for debugging. */}
            {recipient ? recipient.name : `Student not found (${userId})`}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-900 mb-2 block font-medium">Your Compliment:</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`What makes ${recipient?.name?.split(' ')[0] || 'them'} awesome?`}
            className="bg-[#FFF9E9] border-[#D9D9D9] min-h-28 rounded-xl text-black p-4"
          />
        </div>

        <div className="mb-8">
          <label className="text-xs text-gray-900 mb-2 block font-bold uppercase tracking-wider">Suggestions:</label>
          <div className="space-y-0 divide-y divide-gray-100 border-t border-b border-gray-100">
            {complimentSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setMessage(suggestion)}
                className="w-full text-left text-gray-700 px-0 py-3 hover:bg-gray-50 transition-colors text-xs"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Checkbox
            id="anonymous"
            checked={sendAnonymously}
            onCheckedChange={(checked: boolean) => setSendAnonymously(!!checked)}
            className="data-[state=checked]:bg-[#9B1C1C]"
          />
          <label htmlFor="anonymous" className="text-sm text-gray-700 cursor-pointer">
            Send anonymously
          </label>
        </div>

        <Button
          onClick={handleSend}
          disabled={!message.trim() || !recipient}
          className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-14 rounded-full font-bold text-lg disabled:opacity-30"
        >
          Send a Spark
        </Button>
      </div>
    </div>
  );
}