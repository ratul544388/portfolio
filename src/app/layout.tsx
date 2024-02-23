import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { MobileNavbar } from "@/components/mobile-navbar";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/providers/toast-provider";

const font = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio - Owner - Ratul Hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          font.className,
          "flex flex-col bg-gradient-to-r from-sky-500/20 to-indigo-600/20"
        )}
      >
        <span className="bg-blue-500 fixed w-[40vw] aspect-square rounded-full top-[150px] right-20 blur-[100px] 2xl:blur-[300px] opacity-20 pointer-events-none -z-10" />
        <span className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        <ToastProvider />
        <Navbar />
        <MobileNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
