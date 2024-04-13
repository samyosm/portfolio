import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { HeaderProps } from "./Header";

export function HeaderWide(props: HeaderProps) {
  return (
    <header className="hidden xl:flex justify-between py-5 sticky top-0 text-xl text-slate-800">
      <Link href="/" className="font-medium">Samy 🦉</Link>

      <ul className="flex gap-8">
        <HeaderLink href="/">
          Home
        </HeaderLink>

        <HeaderLink href="/blog">
          Blog
        </HeaderLink>
      </ul>
    </header>
  );
}
