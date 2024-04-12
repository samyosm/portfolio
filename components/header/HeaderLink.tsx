import { cn } from "@/utils/cn";
import Link from "next/link";

export interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function HeaderLink(props: HeaderLinkProps) {
  return (
    <Link
      href={props.href}
      className={cn({
        "text-indigo-500 underline underline-offset-4": props.active,
        "hover:text-indigo-500 hover:underline hover:underline-offset-4": true,
      })}
    >
      {props.children}
    </Link>
  );
}
