import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopNav = () => {
  return (
    <nav className="absolute [align-items:normal] bg-transparent box-border caret-transparent hidden grow-0 h-auto min-h-0 min-w-0 text-left ml-0 left-0 top-0 md:static md:items-center md:bg-white md:flex md:grow md:h-12 md:min-h-[auto] md:min-w-[auto] md:ml-6">
      <ul className="box-border caret-transparent hidden list-none mb-4 pl-0">
        <li className="absolute box-border caret-transparent list-item min-w-[80%] z-[-1] top-[800px] md:relative md:inline-block md:top-12">
          <a
            href="/us/webapps/mpp/account-selection"
            role="link"
            className="relative text-white text-[15px] font-bold shadow-[rgb(255,255,255)_0px_0px_0px_1px,rgb(255,255,255)_0px_0px_0px_1px] box-border caret-transparent block leading-[22px] max-w-xs text-center px-6 py-[13px] rounded-[25px] font-paypalsanssmall_regular hover:text-gray-200 hover:border-gray-200"
          >
            Sign Up
          </a>
        </li>
      </ul>
      <div className="box-border caret-transparent block basis-auto grow-0 justify-normal min-h-0 min-w-0 md:flex md:basis-[0%] md:grow md:justify-between md:min-h-[auto] md:min-w-[auto]">
        <NavMenu />
        <ul className="[align-items:normal] box-border caret-transparent hidden list-none min-h-0 min-w-0 pl-0 md:items-center md:flex md:min-h-[auto] md:min-w-[auto]">
          <li className="box-border caret-transparent list-item min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <a
              href="/us/cshelp/personal"
              aria-label="Help"
              className="relative text-base font-black box-border caret-transparent inline leading-6 break-normal mr-0 p-0 rounded-none font-paypal_pro md:text-[15.2457px] md:font-normal md:block md:leading-[24.3931px] md:break-keep md:mr-1 md:px-3 md:py-[7px] md:rounded-[25px] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-black before:md:block before:md:text-[15.2457px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[24.3931px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:absolute before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:break-keep before:md:rounded-[25px] before:md:border-separate before:md:inset-0.5 before:md:font-paypal_pro after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-[15.2457px] after:md:not-italic after:md:normal-nums after:md:font-black after:md:h-0 after:md:tracking-[-0.152457px] after:md:leading-[24.3931px] after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:invisible after:md:break-keep after:md:z-[1] after:md:overflow-hidden after:md:border-separate after:md:font-paypal_pro hover:text-blue-800 hover:bg-white hover:border-blue-800"
            >
              Help
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
