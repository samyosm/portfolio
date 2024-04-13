"use client";

import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { HeaderProps } from "./Header";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { FaBars as Menu, FaXmark as Close } from "react-icons/fa6";

export function HeaderMobile(props: HeaderProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="flex xl:hidden justify-between p-5 top-0 text-xl text-slate-800 overflow-hidden">
      <header className="flex items-center gap-3 sticky">
        <button type="button" onClick={toggleMenu}>
          <Menu />
        </button>
        <Link href="/" className="font-medium">Samy 🦉</Link>
      </header>

      <nav
        className={cn(
          "absolute inset-0 h-screen w-10/12 max-w-80 bg-white/80 backdrop-blur z-10 border-2 border-slate-300 rounded-r-2xl !border-l-0 transition-transform",
          !open && "-translate-x-full",
        )}
      >
        <header className="flex justify-between p-5 items-center">
          <Link href="/" className="font-medium">Samy 🦉</Link>
          <button type="button" onClick={toggleMenu}>
            <Close className="text-2xl text-slate-500" />
          </button>
        </header>
        <hr className="border-t-2 border-slate-300" />
        <ul className={cn("flex flex-col gap-8 p-5")}>
          <HeaderLink href="/">
            Home
          </HeaderLink>

          <HeaderLink href="/blog">
            Blog
          </HeaderLink>
        </ul>
      </nav>
    </div>
  );
}
