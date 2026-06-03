import React from "react";

import {
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
  useUser,
  SignedIn
} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import ProblemsPage from "../Pages/ProblemsPage";
import DashboardPage from "../Pages/DashboardPage";
import {Toaster} from "react-hot-toast";
const App = () => {

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
    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  );
};

export default App;