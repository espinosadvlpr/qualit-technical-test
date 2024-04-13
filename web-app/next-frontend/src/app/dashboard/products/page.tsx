import { authConfig, loginIsRequiredServer } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"
import ProductsList from "@/app/ui/dashboard/products/product-list"

export default async function InvoicePage() {
    await loginIsRequiredServer()
    const session = await getServerSession(authConfig)

    return (
        <>
            <ProductsList username={session?.user?.name} />
        </>
    )
}