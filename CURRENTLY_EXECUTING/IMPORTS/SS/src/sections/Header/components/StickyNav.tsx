export const StickyNav = () => {
  return (
    <nav className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:flex md:leading-7">
      <div className="fixed text-base items-center bg-white box-border caret-transparent flex h-[72px] leading-6 min-w-80 transform-none w-0 z-[2] px-8 py-1 top-0 md:text-lg md:leading-7 md:translate-y-[-100.0%] md:w-screen">
        <div className="text-base box-border caret-transparent grow leading-6 min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-70.svg"
            alt="Icon"
            className="text-base box-border caret-transparent h-[22px] leading-6 text-nowrap w-[22px] md:text-lg md:leading-7"
          />
        </div>
        <div className="text-base box-border caret-transparent shrink-0 justify-end leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
          <div className="text-base items-center box-border caret-transparent flex leading-6 md:text-lg md:leading-7">
            <ul className="text-base items-center box-border caret-transparent flex leading-6 list-none min-h-0 min-w-0 pl-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]"></ul>
            <ul className="text-base box-border caret-transparent gap-x-5 flex leading-6 list-none min-h-0 min-w-0 gap-y-5 ml-2.5 pl-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
              <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
                <div className="text-base box-border caret-transparent basis-[0%] grow leading-6 md:text-lg md:leading-7">
                  <a
                    href="/us/en/sales/contact?page=/us/en"
                    className="relative text-base font-medium items-center bg-black box-border caret-transparent flex justify-center leading-6 text-center text-nowrap align-middle px-5 py-4 rounded-[10000px] font-cash_sans md:text-lg md:leading-[27px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border before:rounded-[10000px] before:border-separate before:border-solid before:inset-0 before:font-cash_sans before:md:text-lg before:md:leading-[27px]"
                  >
                    <span className="relative text-white text-xs box-border caret-transparent block tracking-[0.12px] leading-[18px] max-w-full min-h-0 min-w-0 text-nowrap md:text-sm md:tracking-[0.14px] md:leading-[21px] md:min-h-[auto] md:min-w-[auto]">
                      Contact sales
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
