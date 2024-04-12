import { NextAuthOptions } from "next-auth";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Log in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials){
                if(!credentials || !credentials.email || !credentials.password)
                    return null
                
                const response = await fetch('http://localhost:3000/users/login',{
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                })
                const user = await response.json()
                if(response.ok && user){
                    return {id: user.id, name: user.username, email: user.email}
                }
                return null
            }
        })
    ]
}

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}

const handler = NextAuth(authConfig)

export {handler as GET, handler as POST}