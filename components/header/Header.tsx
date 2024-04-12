import Link from "next/link";
import { HeaderLink } from "./HeaderLink";

export interface HeaderProps {
}

export function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between py-10 sticky top-0 text-xl text-slate-800">
      <Link href="/" className="font-medium">Samy</Link>

      <ul className="flex gap-8">
        <HeaderLink href="/" active>
          Home
        </HeaderLink>

        <HeaderLink href="/blog">
          Blog
        </HeaderLink>
      </ul>
    </header>
  );
}
