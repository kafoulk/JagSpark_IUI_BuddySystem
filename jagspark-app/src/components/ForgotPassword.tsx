import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X } from "lucide-react";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="w-[306px] h-[306px] mb-8">
        <img
          src={imgImage5}
          alt="JAGSPARK Logo"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Title */}
      <h1 className="text-lg font-semibold mb-2">Forgot your password</h1>

      {/* Subtitle */}
      <p className="text-xs text-center text-gray-700 mb-8">
        Please enter your university email address
        <br />
        to get the reset information.
      </p>

      {/* Email Input */}
      <div className="w-full max-w-[259px] mb-4 relative">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Jamesg@iu.edu"
          className="w-full h-12 rounded-full border-gray-200 pr-10"
        />
        {email && (
          <button
            onClick={() => setEmail("")}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#B22222] flex items-center justify-center">
              <X className="w-3 h-3 text-[#B22222]" />
            </div>
          </button>
        )}
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full max-w-[259px] bg-[#B22222] hover:bg-[#7D1616] text-white h-12 rounded-full mb-4"
      >
        Request reset link
      </Button>

      {/* Back to Login */}
      <button
        onClick={() => navigate("/")}
        className="text-[#B22222] underline text-base font-semibold mb-4"
      >
        Back to Login
      </button>

      {/* Confirmation Message */}
      {showConfirmation && (
        <p className="text-xs text-center text-gray-700 mt-4">
          Please check your IU inbox and follow
          <br />
          the instructions
        </p>
      )}
    </div>
  );
}
