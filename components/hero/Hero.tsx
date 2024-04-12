import { HeroMobile } from "./HeroMobile";
import { HeroWide } from "./HeroWide";

export interface HeroProps { }

export function Hero(props: HeroProps) {
  return (
    <div>
      <HeroMobile />
      <HeroWide />
    </div>
  );
}
