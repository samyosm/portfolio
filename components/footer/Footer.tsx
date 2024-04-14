import { SocialLinks } from "../social-link/SocialLinks";

export function Footer() {
  return (
    <footer className="text-slate-700 px-5 xl:px-0 pb-5 pt-10 flex justify-between items-center">
      <p>© {new Date().getFullYear()}. All rights reserved.</p>
      <SocialLinks className="!flex-row text-2xl gap-3" />
    </footer>
  );
}
