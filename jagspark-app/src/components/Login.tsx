import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCompliments } from "../app/context/ComplimentsContext";
import { db } from "../firebase"; // Ensure this path is correct
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useCompliments();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const cleanInput = username.toLowerCase().trim();
      let matchedUser: any = null;

      // 1. Try to fetch by Email directly (fastest)
      const userRef = doc(db, "users", cleanInput);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        matchedUser = userSnap.data();
      } else {
        // 2. If not found by email, try searching by username field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", cleanInput.replace('@', '')));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          matchedUser = querySnapshot.docs[0].data();
        }
      }

      // 3. Handle the result
      if (matchedUser) {
        // In a real app, you'd check matchedUser.password here too!
        await setUser(matchedUser); 
        navigate("/home");
      } else {
        alert("User not recognized in Firestore. Please Sign Up on this device or check your login.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Connection error. Make sure your phone has internet!");
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