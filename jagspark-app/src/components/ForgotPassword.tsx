import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import imgImage5 from "figma:asset/a8c19530c11fd500464c48794a0ea058f9d93dcc.png";

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
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      {/* Logo */}
      <div className="w-[300px] h-[300px] mt-[100px] mb-4">
        <img
          src=""
          alt="JAGSPARK Logo"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Title */}
      <h1 className="text-lg font-semibold mb-2 text-center">
        Forgot your password
      </h1>

      {/* Subtitle */}
      <p className="text-xs text-center text-black mb-8">
        Please enter your university email address
        <br />
        to get the reset information.
      </p>

      {/* Email Input */}
      <div className="w-full max-w-[259px] mb-6">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="IU Email"
          className="w-full h-12 rounded-full border-gray-200 bg-white"
        />
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full max-w-[259px] bg-[#B22222] hover:bg-[#7D1616] text-white h-12 rounded-full mb-6 border border-[#720000]"
      >
        Request reset link
      </Button>

      {/* Back to Login */}
      <button
        onClick={() => navigate("/")}
        className="text-[#B22222] underline text-base font-semibold mb-8"
      >
        Back to Login
      </button>

      {/* Confirmation Message */}
      {showConfirmation && (
        <p className="text-xs text-center text-black mt-4">
          Please check your IU inbox and follow
          <br />
          the instructions
        </p>
      )}

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-1 bg-black rounded-full" />
    </div>
  );
}