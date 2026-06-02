import React from 'react'
import {SignedOut,SignInButton,SignedIn,UserButton} from "@clerk/clerk-react"
import toast from 'react-hot-toast'
function HomePage() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
            <button onClick={()=>toast.success("Logged  in")}>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignInButton/>
      </SignedIn>
      <UserButton/>
    </div>
  )
}

export default HomePage
