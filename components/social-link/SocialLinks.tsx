import {
  FaGithub as Github,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
} from "react-icons/fa6";

import { SocialLink } from "@/components/social-link/SocialLink";
import { cn } from "@/utils/cn";

export function SocialLinks(props: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex flex-col gap-7 text-3xl text-slate-600",
        props.className,
      )}
    >
      <SocialLink
        Icon={Instagram}
        link="https://www.instagram.com/samyosmi"
      />
      <SocialLink
        Icon={Github}
        link="https://www.github.com/samyosm"
      />
      <SocialLink
        Icon={Twitter}
        link="https://www.twitter.com/samy_osmium"
      />
    </aside>
  );
}
