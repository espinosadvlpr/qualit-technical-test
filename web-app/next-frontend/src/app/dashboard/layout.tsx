import SideNav from "../ui/dashboard/side-nav";
import { authConfig } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authConfig)
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav name={session?.user?.name} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto bg-gray-100 md:p-12">{children}</div>
        </div>
    );
}