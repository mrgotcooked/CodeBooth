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
import {Toaster} from "react-hot-toast";
const App = () => {

  const { isSignedIn } = useUser();

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/problems" element={isSignedIn? <ProblemsPage/>:<Navigate to={"/"}/>}/>
    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  );
};

export default App;