export const CTAButtons = () => {
  return (
    <div className="text-base box-border caret-transparent gap-x-2.5 flex flex-wrap justify-center leading-6 gap-y-2.5 md:text-lg md:leading-7">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <a
          href="https://app.squareup.com/signup/en-US"
          className="text-black text-base font-medium box-border caret-transparent inline-block leading-4 rounded-[100px] md:text-lg md:leading-[18px]"
        >
          <span className="relative text-white text-base items-center box-border caret-transparent inline-flex justify-center leading-4 min-w-[120px] px-[30px] py-5 rounded-[100px] md:text-lg md:leading-[18px] md:min-w-[200px] md:px-10 md:py-6 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-lg before:md:leading-[18px]">
            <span className="relative text-base box-border caret-transparent block leading-4 md:text-lg md:leading-[18px]">
              Get started{" "}
              <span className="text-base box-border caret-transparent shrink-0 leading-4 text-nowrap md:text-lg md:leading-[18px]"></span>
            </span>
          </span>
        </a>
      </div>
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <a
          href="/us/en/sales/contact?page=/us/en"
          className="text-black text-base font-medium box-border caret-transparent inline-block leading-4 rounded-[100px] md:text-lg md:leading-[18px]"
        >
          <span className="relative text-base items-center box-border caret-transparent inline-flex justify-center leading-4 min-w-[120px] px-[30px] py-5 rounded-[100px] md:text-lg md:leading-[18px] md:min-w-[200px] md:px-10 md:py-6 before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-lg before:md:leading-[18px]">
            <span className="relative text-base box-border caret-transparent block leading-4 md:text-lg md:leading-[18px]">
              Contact sales{" "}
              <span className="text-base box-border caret-transparent shrink-0 leading-4 text-nowrap md:text-lg md:leading-[18px]"></span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};
