import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="relative text-base bg-black box-border caret-transparent leading-6 py-20 md:text-lg md:leading-7">
      <div className="text-base items-center box-border caret-transparent flex flex-col flex-wrap justify-normal leading-6 w-[335px] mx-auto md:text-lg md:items-start md:flex-row md:justify-center md:leading-7 md:w-[1160px]">
        <div className="text-white text-base box-border caret-transparent leading-6 w-full md:text-lg md:leading-7 md:w-6/12">
          <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
            <div className="text-base box-border caret-transparent leading-6 max-w-[335px] w-full md:text-lg md:leading-7 md:max-w-[1160px]">
              <div className="text-base items-center box-border caret-transparent gap-x-5 flex flex-col leading-6 gap-y-5 text-center w-full mb-[30px] md:text-lg md:leading-7">
                <div className="text-base box-border caret-transparent gap-x-5 flex flex-col leading-6 gap-y-5 md:text-lg md:leading-7">
                  <div className="text-base box-border caret-transparent leading-[0px] md:text-lg">
                    <h2
                      aria-label="Get the latest updates from Square"
                      className="text-xl font-medium box-border caret-transparent leading-[26px] max-w-[505.599px] font-cash_sans md:text-[28px] md:leading-[36.4px] md:max-w-[707.843px]"
                    >
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          Get
                        </div>
                      </div>
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          the
                        </div>
                      </div>
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          latest
                        </div>
                      </div>
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          updates
                        </div>
                      </div>
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          from
                        </div>
                      </div>
                      <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                        <div className="relative text-xl box-border caret-transparent inline-block leading-[26px] md:text-[28px] md:leading-[36.4px]">
                          Square
                        </div>
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="text-base content-end items-end box-border caret-transparent gap-x-[normal] block justify-center leading-6 gap-y-[normal] md:text-lg md:gap-x-2.5 md:flex md:leading-7 md:gap-y-2.5">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
