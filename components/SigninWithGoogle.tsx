"use client"
import { useSession, signIn, signOut } from "next-auth/react"

const SigninWithGoogle = () => {
  return (
    <div>
      <button onClick={(()=>{signIn()})}>Signin With Google</button>
    </div>
  )
}

export default SigninWithGoogle
