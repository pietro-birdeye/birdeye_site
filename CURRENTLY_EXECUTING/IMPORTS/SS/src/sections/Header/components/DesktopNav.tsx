import { Logo } from "@/components/Logo";
import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopNav = () => {
  return (
    <div className="relative text-base bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_50%,rgb(0,0,0)_50%,rgba(0,0,0,0))] bg-size-[100%_200%] box-border caret-transparent gap-x-3 hidden leading-6 min-w-80 gap-y-3 z-[3] bg-[position:left_100%] px-[22px] py-1 md:text-lg md:flex md:leading-7">
      <div className="text-base items-center box-border caret-transparent flex leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <Logo />
      </div>
      <div className="text-base items-center box-border caret-transparent flex leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavMenu />
      </div>
      <div className="text-base items-center box-border caret-transparent flex justify-end leading-6 min-h-0 min-w-0 w-full md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <ul className="text-base box-border caret-transparent flex leading-6 list-none min-h-0 min-w-0 pl-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
          <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <a
                href="/login?lang_code=en-us"
                className="relative text-white text-base font-medium box-border caret-transparent inline-block leading-6 text-center text-nowrap align-middle overflow-hidden px-2.5 py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]"
              >
                <span className="text-base box-border caret-transparent leading-6 text-nowrap md:text-lg md:leading-[27px]">
                  Sign in
                </span>
              </a>
            </div>
          </li>
          <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <a
                href="/help/us/en"
                className="relative text-white text-base font-medium box-border caret-transparent inline-block leading-6 text-center text-nowrap align-middle overflow-hidden px-2.5 py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]"
              >
                <span className="text-base box-border caret-transparent leading-6 text-nowrap md:text-lg md:leading-[27px]">
                  Support
                </span>
              </a>
            </div>
          </li>
        </ul>
        <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
          <button className="relative text-white text-base font-medium bg-transparent caret-transparent leading-4 text-center text-nowrap align-middle overflow-hidden px-2.5 py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[18px]">
            <img
              src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-61.svg"
              alt="Icon"
              className="text-base box-border caret-transparent inline-block h-6 leading-6 text-nowrap w-6 md:text-lg md:leading-[27px]"
            />
          </button>
          <div className="absolute text-base bg-white box-border caret-transparent leading-6 max-h-0 w-full overflow-hidden left-0 top-0 md:text-lg md:leading-7 md:top-[72px]">
            <div className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:leading-7">
              <form className="text-neutral-500 text-base items-center box-border caret-transparent gap-x-3 flex justify-between leading-6 gap-y-3 w-full p-0 md:text-lg md:leading-7 md:px-[88px] md:py-10">
                <img
                  src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-62.svg"
                  alt="Icon"
                  className="text-base box-border caret-transparent h-6 leading-6 w-6 md:text-lg md:leading-7"
                />
                <input
                  name="query"
                  placeholder="Search squareup.com"
                  className="text-black text-2xl font-medium bg-transparent box-border caret-transparent block grow tracking-[-0.72px] leading-[30.58px] p-0 font-cash_sans"
                />
                <button
                  type="button"
                  aria-label="clear search input"
                  className="text-base bg-transparent caret-transparent hidden leading-[normal] p-0 md:text-lg"
                >
                  <img
                    src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-63.svg"
                    alt="Icon"
                    className="text-base box-border caret-transparent inline-block h-[25px] w-6 md:text-lg"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative text-base box-border caret-transparent shrink-0 leading-6 min-h-0 min-w-0 z-[1] md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
          <button className="relative text-white text-base font-medium items-center bg-transparent caret-transparent flex justify-center leading-6 text-center text-nowrap align-middle overflow-hidden px-2.5 py-5 rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]">
            <img
              src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-64.svg"
              alt="Icon"
              className="relative text-base box-border caret-transparent h-[21px] leading-4 text-nowrap w-[21px] md:text-lg md:leading-[18px]"
            />
          </button>
        </div>
      </div>
      <div className="absolute text-base bg-white box-border caret-transparent h-0 leading-6 w-full z-[-1] left-0 -top-1 md:text-lg md:leading-7 md:top-[68px]"></div>
    </div>
  );
};
