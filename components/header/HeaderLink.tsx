"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

export function HeaderLink(props: HeaderLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={cn({
        "text-indigo-500 underline underline-offset-4": pathname.endsWith(
          props.href,
        ),
        "hover:text-indigo-500 hover:underline hover:underline-offset-4": true,
      })}
    >
      {props.children}
    </Link>
  );
}
