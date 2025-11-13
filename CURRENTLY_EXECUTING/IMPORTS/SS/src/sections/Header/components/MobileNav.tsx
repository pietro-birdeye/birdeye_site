import { MobileLogo } from "@/components/MobileLogo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { MobileMenuPanel } from "@/sections/Header/components/MobileMenuPanel";

export const MobileNav = () => {
  return (
    <div className="relative text-base bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_50%,rgb(0,0,0)_50%,rgba(0,0,0,0))] bg-size-[100%_200%] box-border caret-transparent flex leading-6 min-w-80 z-[3] bg-[position:left_100%] px-[22px] py-1 md:text-lg md:hidden md:leading-7">
      <div className="text-base items-center box-border caret-transparent flex justify-start leading-6 min-h-[auto] min-w-[auto] w-full md:text-lg md:leading-7 md:min-h-0 md:min-w-0">
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7 md:min-h-0 md:min-w-0">
          <MobileLogo />
        </div>
        <button className="absolute text-base font-medium bg-transparent caret-transparent hidden leading-6 text-center text-nowrap align-middle overflow-hidden p-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]">
          <img
            src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-65.svg"
            alt="Icon"
            className="text-base box-border caret-transparent inline-block h-5 leading-6 text-nowrap w-[18px] md:text-lg md:leading-[27px]"
          />
        </button>
      </div>
      <div className="text-base items-center box-border caret-transparent flex justify-end leading-6 min-h-[auto] min-w-[auto] w-full md:text-lg md:leading-7 md:min-h-0 md:min-w-0">
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7 md:min-h-0 md:min-w-0"></div>
        <MobileMenuButton />
      </div>
      <div className="absolute text-base bg-white box-border caret-transparent h-0 leading-6 w-full overflow-hidden left-0 top-[72px] md:text-lg md:leading-7 md:top-0">
        <MobileMenuPanel />
      </div>
    </div>
  );
};
