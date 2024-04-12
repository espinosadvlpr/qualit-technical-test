import { CredentialsForm } from "./ui/login-form";

export default async function LoginPage() {
  return (
    <>
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <CredentialsForm />
      </div>
    </main>
    </>
  )
}