import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCompliments } from "../app/context/ComplimentsContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useCompliments();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Look in the permanent database list we created in the Context
    const dbData = localStorage.getItem("jagspark_users_db");
    
    // If the database is empty, no one has signed up yet
    if (!dbData) {
      alert("No accounts found. Please Sign Up first!");
      return;
    }

    const usersList = JSON.parse(dbData);

    // 2. Clean up the input to match the saved data
    const cleanInput = username.toLowerCase().trim();

    // 3. Search the list for a matching email or username
    const matchedUser = usersList.find((u: any) => {
      const storedEmail = u.email.toLowerCase().trim();
      const storedUsername = u.username.toLowerCase().replace('@', '').trim();
      return cleanInput === storedEmail || cleanInput === storedUsername;
    });

    if (matchedUser) {
      // 4. Set the active session in our Context
      setUser(matchedUser); 
      navigate("/home");
    } else {
      alert("User not recognized. Please check your JGUID/Email or Sign Up.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-8 tracking-tight font-bold">
            <span className="text-[#9B1C1C]">JAG</span>
            <span className="text-black">SPARK</span>
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input
            type="text"
            placeholder="JGUID or IU Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border-gray-200 h-12 rounded-lg text-black px-4"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white border-gray-200 h-12 rounded-lg text-black px-4"
            required
          />
          <Button type="submit" className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-12 rounded-full font-semibold">
            Login
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">New to JagSpark?</span><br />
            <button type="button" onClick={() => navigate("/signup")} className="text-[#9B1C1C] hover:underline mt-1 font-bold">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}