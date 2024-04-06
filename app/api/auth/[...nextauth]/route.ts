// NextAuth lets you add providers, so you can do auth either by crendetial or  OAuth or email OTP
// IMPORTANT Next Auth only handles Sign in it does not handle sign up, you need to create your own sign up page
// So NextAuth is a "Session Management library" , create cookie, protect routes, do whatever etc

import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials: {
                username: { label:'email',type:'text',placeholder: 'Email'},
                password: { label:'email',type:'password',placeholder: 'Password'}
            },
            async authorize(credentials: any) {
                // In this point, you need to search your backend for whether the username password matches
                // And then choose what to return once you find the user, we can return the user.id
                // const user = await prisma.user.findOne({where:{email:username,password:password}})
                return {
                    id:"user1"
                }
            }
        })
    ]
});
// Above credentials you are actually fill the input variables. Gogin to api/auth/signin will render a mast Sign in page for you

export const GET = handler;
export const POST = handler;