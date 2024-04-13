"use client";

import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NavProps {
    name: string | null | undefined;
}

export default function SideNav({ name }: NavProps) {
    const router = useRouter();
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-violet-400">
            <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-violet-400 text-white text-xl font-bold p-4 md:h-20">
                @{name}
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-violet-400 md:block"></div>
                <form action={async () => {
                    await signOut({ callbackUrl: '/' });
                }}>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-violet-400 p-3 text-sm font-medium hover:bg-violet-200 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block"  >
                            Log Out
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}
