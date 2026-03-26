import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Home as HomeIcon, User } from "lucide-react";
import { users, complimentSuggestions } from "../app/data/mockData";
import { useCompliments } from "../app/context/ComplimentsContext";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

export function WriteCompliment() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { sendCompliment } = useCompliments();
  const [message, setMessage] = useState("");
  const [sendAnonymously, setSendAnonymously] = useState(true);

  const recipient = users.find((u) => u.id === userId);

  const handleSend = () => {
    if (message.trim() && recipient) {
      sendCompliment({
        text: message,
        recipientId: recipient.id,
        recipientName: recipient.name,
        isAnonymous: sendAnonymously,
      });
      navigate(`/confirmation/${encodeURIComponent(recipient.name)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

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
        <h2 className="text-xl mb-6 text-center">Write Compliment</h2>

        {/* Recipient */}
        <div className="mb-6">
          <label className="text-sm text-gray-900 mb-2 block">To:</label>
          <div className="bg-[#FFF9E9] border border-[#D9D9D9] rounded-full px-4 py-2.5 text-gray-800">
            {recipient?.name || "Unknown"}
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="text-sm text-gray-900 mb-2 block">
            Your Compliment:
          </label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write something nice..."
            className="bg-[#FFF9E9] border-[#D9D9D9] min-h-28 rounded-xl resize-none"
          />
        </div>

        {/* Suggestions */}
        <div className="mb-8">
          <label className="text-xs text-gray-900 mb-2 block">
            Suggestions:
          </label>
          <div className="space-y-0 divide-y divide-gray-300">
            {complimentSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left text-gray-700 px-0 py-3 hover:bg-gray-50 transition-colors text-xs"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Send Anonymously */}
        <div className="flex items-center gap-3 mb-8">
          <Checkbox
            id="anonymous"
            checked={sendAnonymously}
            onCheckedChange={(checked) => setSendAnonymously(!!checked)}
            className="border-gray-300"
          />
          <label
            htmlFor="anonymous"
            className="text-sm text-gray-700 cursor-pointer"
          >
            Send anonymously
          </label>
        </div>

        {/* Send Button */}
        <Button
          onClick={handleSend}
          disabled={!message.trim()}
          className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-14 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send a Compliment
        </Button>
      </div>
    </div>
  );
}