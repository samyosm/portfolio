import type { Metadata } from "next";
import { Lexend as Font } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { cn } from "@/utils/cn";
import { Footer } from "@/components/footer/Footer";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Samy",
    template: "%s | Samy",
  },
  description:
    "A Web Developer with high level of experience in web design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          font.className,
          "max-w-screen-xl mx-auto min-h-screen flex flex-col",
        )}
      >
        <Header />
        <main className="h-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
