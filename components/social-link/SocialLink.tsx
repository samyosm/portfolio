import Link from "next/link";
import { IconType } from "react-icons";

export interface SocialLinkProps {
  Icon: IconType;
  link: string;
}

export function SocialLink({ Icon, ...props }: SocialLinkProps) {
  return (
    <Link href={props.link}>
      <Icon />
    </Link>
  );
}
