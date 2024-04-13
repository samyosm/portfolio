import Illustration from "@/assets/illustration.svg";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { HeroPresentation } from "./HeroPresentation";

export function HeroMobile() {
  return (
    <div className="w-full my-6 lg:hidden space-y-16">
      <div className="flex items-center justify-between gap-5 w-full max-w-80 ml-auto">
        <SocialLinks />
        <figure className="relative w-64 h-64">
          <Image
            className="object-contain"
            src={Illustration}
            alt="A man programming on his desk"
            sizes="16rem"
            fill
          />
        </figure>
      </div>

      <HeroPresentation />
    </div>
  );
}
