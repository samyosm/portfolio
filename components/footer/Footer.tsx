import { SocialLinks } from "../social-link/SocialLinks";

export function Footer() {
  return (
    <footer className="p-5 text-slate-700 flex justify-between items-center fixed bottom-0 left-0 w-full">
      <p>© {new Date().getFullYear()}. All rights reserved.</p>
      <SocialLinks className="!flex-row text-2xl" />
    </footer>
  );
}
