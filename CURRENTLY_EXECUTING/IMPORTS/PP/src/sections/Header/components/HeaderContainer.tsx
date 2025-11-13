import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";

export const HeaderContainer = () => {
  return (
    <div className="items-center box-border caret-transparent flex h-14 max-w-none mx-auto px-4 py-3 md:[align-items:normal] md:h-auto md:max-w-[1390px] md:px-8 md:py-5 after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-plain">
      <MobileMenuButton />
      <Logo />
      <DesktopNav />
      <div className="static items-center box-border caret-transparent flex h-6 justify-normal text-center w-6 z-auto ml-4 md:relative md:[align-items:normal] md:h-12 md:justify-end md:text-right md:w-auto md:z-10 md:ml-0">
        <div className="static [align-items:normal] box-content caret-black block h-auto min-h-0 min-w-0 text-start w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:w-max md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <a
            href="/signin"
            role="link"
            className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black inline shrink leading-[normal] max-h-none min-h-0 min-w-0 ml-0 p-0 rounded-none font-times md:relative md:text-lg md:font-black md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:flex md:shrink-0 md:leading-[27px] md:max-h-12 md:min-h-[auto] md:min-w-24 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[9px] md:px-[28.8px] md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[32px] md:border-[3px] md:border-solid md:font-paypal_pro"
          >
            Log In
          </a>
          <a
            href="/us/webapps/mpp/account-selection"
            role="link"
            className="static text-black text-base font-normal [align-items:normal] bg-transparent box-content caret-black inline shrink leading-[normal] max-h-none min-h-0 min-w-0 ml-0 p-0 rounded-none font-times md:relative md:text-white md:text-lg md:font-black md:items-center md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flex md:shrink-0 md:leading-[27px] md:max-h-12 md:min-h-[auto] md:min-w-24 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[9px] md:px-[28.8px] md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[32px] md:border-[3px] md:border-solid md:font-paypal_pro hover:text-neutral-900 hover:bg-cyan-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
