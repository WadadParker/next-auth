"use client"
// useRouter is only allowed in client component
import { useRouter } from "next/navigation";

export const Appbar = () => {
    const router = useRouter();
    return (<div>
        <button onClick={()=> {
            router.push("/api/auth/signin")
        }} className="p-4 rounded border bg-black text-white text-3xl hover:bg-white cursor-pointer hover:text-black">Signin</button>
    </div>)
}

// You can either do this, or you can use signIn, signOut from NextAuth which will be shown in next commit