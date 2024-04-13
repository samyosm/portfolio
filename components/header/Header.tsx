import { HeaderMobile } from "./HeaderMobile";
import { HeaderWide } from "./HeaderWide";

export interface HeaderProps {
}

export function Header(props: HeaderProps) {
  return (
    <>
      <HeaderMobile {...props} />
      <HeaderWide {...props} />
    </>
  );
}
