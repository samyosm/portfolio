import type { Metadata } from "next";
import { Lexend as Font } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { cn } from "@/utils/cn";

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
    <html lang="en">
      <body className={cn(font.className, "max-w-screen-xl mx-auto")}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
