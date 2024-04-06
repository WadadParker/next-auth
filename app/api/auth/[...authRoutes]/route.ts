// If you want to create a route handles (like how we do for express) then this is the way
// 1] Select the api route, in this case this is api/auth
// 2] Add a folder with name as follow "[...routeHandlerName]"
// 3] Now add route.ts file to the ...routeHandler folder you created
// IMPORTANT: The handler for api/auth, you need to create route.ts file in api/auth folder

import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message:"This is from next js"
    })
}

// In above code, I wrote the route name as api/auth/sdadasdae it still give the GET request reponse