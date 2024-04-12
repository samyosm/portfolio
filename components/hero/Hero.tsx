import {
  FaGithub as Github,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
} from "react-icons/fa6";
import Illustration from "@/assets/illustration.svg";
import Image from "next/image";
import { SocialLink } from "../social-link/SocialLink";
import Link from "next/link";

export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <div className="w-full flex items-center justify-between my-24">
      <div className="flex items-center gap-16">
        <div className="flex flex-col gap-7 text-3xl text-slate-600">
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
        </div>
        <div className="flex flex-col max-w-md gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-slate-900 text-6xl font-semibold">
              Hi, I&apos;m Samy
            </h1>
            <p className="text-slate-600 text-2xl font-medium">
              A Web Developer
            </p>
          </div>

          <p className="text-slate-600 text-xl">
            High level of experience in web design and development knowledge,
            producing quality work.
          </p>

          <Link
            href="/blog"
            className="bg-indigo-500 text-white w-fit rounded-2xl px-7 py-3 text-xl"
          >
            Read Blog
          </Link>
        </div>
      </div>
      <Image
        src={Illustration}
        alt="A man programming on his desk"
      />
    </div>
  );
}
