export const CTASection = () => {
  return (
    <section className="relative text-white text-base content-center box-border caret-transparent grid justify-center leading-6 z-10 py-[60px] md:text-lg md:leading-7 md:py-[120px]">
      <div className="relative text-base box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,1fr)] leading-6 gap-y-[30px] w-[335px] z-[1] mx-auto md:text-lg md:leading-7 md:gap-y-[60px] md:w-[1160px]">
        <header className="text-base items-center box-border caret-transparent gap-x-[30px] flex flex-col col-end-auto col-start-[span_12] leading-6 gap-y-[30px] text-center w-full md:text-lg md:col-end-[span_10] md:col-start-2 md:leading-7">
          <div className="text-base box-border caret-transparent gap-x-[30px] flex flex-col leading-6 gap-y-[30px] md:text-lg md:leading-7">
            <div className="text-base box-border caret-transparent leading-[0px] md:text-lg">
              <h2 className="text-[42px] box-border caret-transparent tracking-[-0.42px] leading-[46.2px] max-w-full m-0 pb-0 font-exact_block md:text-[74px] md:tracking-[-1.48px] md:leading-[74px] md:max-w-[50%] md:m-auto md:pb-5">
                Make your next move
              </h2>
            </div>
          </div>
          <div className="text-base box-border caret-transparent gap-x-2.5 flex flex-wrap justify-center leading-6 gap-y-2.5 md:text-lg md:leading-7">
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <a
                href="https://app.squareup.com/signup/en-US"
                className="text-base font-medium box-border caret-transparent inline-block leading-4 rounded-[100px] md:text-lg md:leading-[18px]"
              >
                <span className="relative text-base items-center box-border caret-transparent inline-flex justify-center leading-4 min-w-[120px] px-[30px] py-5 rounded-[100px] md:text-lg md:leading-[18px] md:min-w-[200px] md:px-10 md:py-6 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-lg before:md:leading-[18px]">
                  <span className="relative text-base box-border caret-transparent block leading-4 md:text-lg md:leading-[18px]">
                    Get started{" "}
                    <span className="text-base box-border caret-transparent shrink-0 leading-4 text-nowrap md:text-lg md:leading-[18px]"></span>
                  </span>
                </span>
              </a>
            </div>
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <a
                href="https://squareup.com/us/en/sales/contact?page=us/en"
                className="text-base font-medium box-border caret-transparent inline-block leading-4 rounded-[100px] md:text-lg md:leading-[18px]"
              >
                <span className="relative text-black text-base items-center box-border caret-transparent inline-flex justify-center leading-4 min-w-[120px] px-[30px] py-5 rounded-[100px] md:text-lg md:leading-[18px] md:min-w-[200px] md:px-10 md:py-6 before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-lg before:md:leading-[18px]">
                  <span className="relative text-base box-border caret-transparent block leading-4 md:text-lg md:leading-[18px]">
                    Contact sales{" "}
                    <span className="text-base box-border caret-transparent shrink-0 leading-4 text-nowrap md:text-lg md:leading-[18px]"></span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};
