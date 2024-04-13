import Illustration from "@/assets/illustration.svg";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { HeroPresentation } from "./HeroPresentation";

export function HeroWide() {
  return (
    <div className="w-full items-center justify-between my-24 hidden lg:flex">
      <div className="flex items-center gap-16">
        <SocialLinks />
        <HeroPresentation />
      </div>
      <Image
        src={Illustration}
        alt="A man programming on his desk"
      />
    </div>
  );
}
