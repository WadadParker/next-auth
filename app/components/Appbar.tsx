"use client"
// useRouter is only allowed in client component
import {signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

export const Appbar = () => {
    const router = useRouter();
    const session = useSession();
    return (<div>
        <button onClick={()=> {
            // router.push("/api/auth/signin")
            signIn()
        }} className="p-4 rounded border bg-black text-white text-3xl hover:bg-white cursor-pointer hover:text-black">Signin</button>
        <button onClick={()=> {
            signOut()
        }} className="p-4 rounded border bg-black text-white text-3xl hover:bg-white cursor-pointer hover:text-black">Logout</button>
        {JSON.stringify(session)}
    </div>)
}

// You can either do this, or you can use signIn, signOut from NextAuth which will be shown in next commit