import './ui/global.css'
import { inter } from "./ui/fonts";

export const metadata = {
  title: 'Products APP',
  description: 'APP to list your products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
