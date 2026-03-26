import { RouterProvider } from "react-router"; // Use react-router-dom if react-router fails
import { router } from "./routes"; // Import the router you just made
import { ComplimentsProvider } from "./context/ComplimentsContext"; 
import "../index.css";

function App() {
  return (
    <ComplimentsProvider>
      {/* Instead of <BrowserRouter>, we use RouterProvider. 
         This tells React to use the configuration in your routes.tsx 
      */}
      <RouterProvider router={router} />
    </ComplimentsProvider>
  );
}

export default App;