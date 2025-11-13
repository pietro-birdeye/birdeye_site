import { SkipLink } from "@/sections/Header/components/SkipLink";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNav } from "@/sections/Header/components/MobileNav";
import { StickyNav } from "@/sections/Header/components/StickyNav";
import { MobileCTA } from "@/sections/Header/components/MobileCTA";

export const Header = () => {
  return (
    <header className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <div className="relative text-base box-border caret-transparent leading-6 z-[1000] md:text-lg md:leading-7">
          <SkipLink />
          <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
            <DesktopNav />
            <div className="text-base bg-white box-border caret-transparent h-0 leading-6 md:text-lg md:leading-7"></div>
            <MobileNav />
          </div>
          <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
            <div className="absolute text-base box-border caret-transparent leading-6 top-[1000px] md:text-lg md:leading-7"></div>
            <div className="text-base bg-white box-border caret-transparent h-0 leading-6 md:text-lg md:leading-7"></div>
            <StickyNav />
            <nav className="text-base box-border caret-transparent block leading-6 md:text-lg md:hidden md:leading-7">
              <MobileCTA />
            </nav>
          </div>
        </div>
        <div className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:leading-7"></div>
        <div className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:leading-7"></div>
      </div>
    </header>
  );
};
