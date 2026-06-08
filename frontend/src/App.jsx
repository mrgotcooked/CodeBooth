
import {
  useUser
} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import ProblemPage from "./Pages/ProblemPage";
import ProblemsPage from "./Pages/ProblemsPage";
import SessionPage from "./Pages/SessionPage";
import { socket } from "./lib/socket";
const App = () => {
  console.log("Socket state:", socket.connected);
  const { isSignedIn,isLoaded } = useUser();
  //this will get rid of the flickering effect
    if(!isLoaded)
      return null;
  return (
    <>
    <Routes>
    <Route path="/" element={!isSignedIn?<HomePage/>:<Navigate to={"/dashboard"}/>}/>
    <Route path="/dashboard" element={isSignedIn?<DashboardPage/>:<Navigate to={"/"}/>}/>
    <Route path="/problems" element={isSignedIn? <ProblemsPage/>:<Navigate to={"/"}/>}/>
    <Route path="/problems/:id" element={isSignedIn? <ProblemPage/>:<Navigate to={"/"}/>}/>
    <Route path="/session/:id" element={isSignedIn? <SessionPage/>:<Navigate to={"/"}/>}/>
    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  );
};

export default App;