import { CredentialsForm } from "./ui/login-form";
import { getServerSession } from "next-auth/next";
import { authConfig } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authConfig)
  if (session) return redirect("/dashboard")
  return (
    <>
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 rounded-lg shadow-md">
          <CredentialsForm />
        </div>
      </main>
    </>
  )
}