import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { ForgotPassword } from "../components/ForgotPassword";
// 1. Import the missing provider
import { ComplimentsProvider } from "./context/ComplimentsContext"; 
import "../index.css";

function App() {
  return (
    <BrowserRouter>
      {/* 2. Wrap everything in the Provider so Home.tsx can find its data */}
      <ComplimentsProvider>
        <Routes>
          {/* The "Root" path loads Login */}
          <Route path="/" element={<Login />} />
          
          {/* Your other pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Catch-all: send any weird URLs back to Login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ComplimentsProvider>
    </BrowserRouter>
  );
}

export default App;