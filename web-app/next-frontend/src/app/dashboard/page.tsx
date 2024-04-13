import { authConfig, loginIsRequiredServer } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

export default async function Dashboard() {
    await loginIsRequiredServer()
    const session = await getServerSession(authConfig)
    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
                <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-2xl xl:text-3xl">Welcome @{session?.user?.name} to the products app!</h1>
            </div>
        </>
    )
}