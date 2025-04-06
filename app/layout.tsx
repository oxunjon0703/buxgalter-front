import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
    title: "Balansor",
    description: "Sifatli buxgalter xizmatlari!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
                <Navbar />
                <main className="flex-grow overflow-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}