import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCompliments } from "../app/context/ComplimentsContext";

export function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useCompliments();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare User Data
    const handle = email.split('@')[0].toLowerCase();
    const newUser = {
      fullName: fullName,
      email: email.toLowerCase().trim(),
      username: `@${handle}`
    };

    // Save to Context (which saves to LocalStorage)
    setUser(newUser);
    
    // Jump to home
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="w-[300px] h-[300px] mt-[60px] mb-4 flex items-center justify-center bg-gray-50 rounded-full">
         <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-[#9B1C1C]">JAG</span>
            <span className="text-black">SPARK</span>
          </h1>
      </div>

      <div className="w-full max-w-[259px] space-y-4 mb-6">
        <Input placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="h-12 rounded-full border-gray-200 text-black px-6" />
        <Input placeholder="IU Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded-full border-gray-200 text-black px-6" />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 rounded-full border-gray-200 text-black px-6" />
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="h-12 rounded-full border-gray-200 text-black px-6" />
      </div>

      <Button onClick={handleSignUp} className="w-full max-w-[259px] bg-[#B22222] hover:bg-[#7D1616] text-white h-12 rounded-full mb-6 font-bold">
        Sign Up
      </Button>

      <button onClick={() => navigate("/")} className="text-[#B22222] underline text-sm font-semibold mb-8">
        Back to Login
      </button>
    </div>
  );
}