import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import imgImage5 from "figma:asset/a8c19530c11fd500464c48794a0ea058f9d93dcc.png";

export function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (fullName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Mock sign up - navigate to home
        navigate("/home");
      } else {
        alert("Passwords do not match");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      {/* Logo */}
      <div className="w-[300px] h-[300px] mt-[100px] mb-8">
        <img
          src=""
          alt="JAGSPARK Logo"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Form Inputs */}
      <div className="w-full max-w-[259px] space-y-4 mb-6">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="w-full h-12 rounded-full border-gray-200 bg-white"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="IU Email"
          className="w-full h-12 rounded-full border-gray-200 bg-white"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full h-12 rounded-full border-gray-200 bg-white"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full h-12 rounded-full border-gray-200 bg-white"
        />
      </div>

      {/* Sign Up Button */}
      <Button
        onClick={handleSignUp}
        className="w-full max-w-[259px] bg-[#B22222] hover:bg-[#7D1616] text-white h-12 rounded-full mb-6 border border-[#720000]"
      >
        Sign Up
      </Button>

      {/* Already have account */}
      <p className="text-sm text-black text-center mb-2">
        Already have an account?
      </p>

      {/* Login Link */}
      <button
        onClick={() => navigate("/")}
        className="text-[#B22222] underline text-base font-semibold mb-8"
      >
        Login
      </button>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-1 bg-black rounded-full" />
    </div>
  );
}