
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {

    const session = await getServerSession()
    return NextResponse.json({
        message:"This is from next js, with user details. This is how you get user details from session in a server side component",
        session
    })
}
