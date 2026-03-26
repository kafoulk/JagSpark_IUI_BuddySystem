import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - just navigate to home
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-8 tracking-tight">
            <span className="text-[#9B1C1C]">JAG</span>
            <span className="text-black">SPARK</span>
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="JGUID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-gray-200 h-12 rounded-lg"
            />
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#9B1C1C] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#9B1C1C] hover:bg-[#7D1616] text-white h-12 rounded-full"
          >
            Login
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">New to the Buddy System?</span>
            <br />
            <button
              type="button"
              className="text-[#9B1C1C] hover:underline mt-1"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}