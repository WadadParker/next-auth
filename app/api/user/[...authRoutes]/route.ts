// If you want to create a route handles (like how we do for express) then this is the way
// 1] Select the api route, in this case this is api/auth
// 2] Add a folder with name as follow "[...routeHandlerName]"
// 3] Now add route.ts file to the ...routeHandler folder you created
// IMPORTANT: The handler for api/auth, you need to create route.ts file in api/auth folder
// The dynamic [...] route folder also holds true for frontend routes

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET(req:NextRequest , { params: { authRoutes } }: { params:{authRoutes: string[]} }) {
    console.log(authRoutes);
    const session = await getServerSession()
    return NextResponse.json({
        message:"This is from next js, with user details. This is how you get user details from session in a server side component",
        session
    })
}

// In above code, I wrote the route name as api/auth/sdadasdae it still give the GET request reponse
// Also bhai, this is server, if you console log here, it appears in terminal not the browser
// The params argument will be in this form { params: { authRoutes: [ 'ddwdw' ] } } , so make sure to destructure it