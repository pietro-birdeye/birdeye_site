import { HeroVideo } from "@/sections/HeroSection/components/HeroVideo";
import { HeroLogos } from "@/sections/HeroSection/components/HeroLogos";

export const HeroSection = () => {
  return (
    <div className="relative text-base box-border caret-transparent leading-6 min-h-[1600px] md:text-lg md:leading-7">
      <div className="sticky text-base box-border caret-transparent grid leading-6 min-h-[1000px] top-0 md:text-lg md:leading-7">
        <div className="text-base items-center box-border caret-transparent grid col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-[1000px] leading-6 w-full z-10 md:text-lg md:leading-7">
          <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 leading-6 object-cover md:text-lg md:leading-7">
            <div className="text-base bg-black box-border caret-transparent h-[1000px] leading-6 min-h-full min-w-full object-cover w-full md:text-lg md:leading-7">
              <HeroVideo />
            </div>
            <div className="absolute text-base box-border caret-transparent leading-6 pointer-events-none w-full bottom-0 md:text-lg md:leading-7">
              <HeroLogos />
            </div>
          </div>
          <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 leading-6 md:text-lg md:leading-7">
            <section className="relative text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <section className="relative text-white text-base content-center box-border caret-transparent grid justify-center leading-6 overflow-hidden pt-5 pb-10 md:text-lg md:leading-7 md:pt-10 md:pb-20">
                <div className="relative text-base box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,1fr)] leading-6 gap-y-[30px] w-[335px] z-[1] mx-auto md:text-lg md:leading-7 md:gap-y-[60px] md:w-[1160px]">
                  <header className="text-base items-center box-border caret-transparent gap-x-[30px] flex flex-col col-end-auto col-start-[span_12] leading-6 gap-y-[30px] text-center w-full md:text-lg md:col-end-[span_10] md:col-start-2 md:leading-7">
                    <div className="text-base box-border caret-transparent gap-x-[30px] flex flex-col leading-6 gap-y-[30px] md:text-lg md:leading-7">
                      <h1
                        aria-label="Local legend or global icon. Make it big on your block."
                        className="text-[40px] box-border caret-transparent tracking-[0.5px] leading-[0px] font-square_sans_display_vf md:text-[64px] md:tracking-[-0.5px]"
                      >
                        <span className="text-base box-content caret-black inline tracking-[normal] leading-[normal] max-w-none font-times md:text-[81px] md:aspect-auto md:box-border md:caret-transparent md:block md:tracking-[-1.62px] md:leading-[81px] md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-exact_block">
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              Local
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              legend
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              or
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              global
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              icon.
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              Make
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              it
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              big
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              on
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              your
                            </div>
                          </div>
                          <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content caret-black block md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              block.
                            </div>
                          </div>
                        </span>
                      </h1>
                    </div>
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
                  </header>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="relative text-base items-center self-center box-border caret-transparent gap-x-5 grid col-end-[-1] col-start-1 row-end-[-1] row-start-1 grid-cols-[repeat(9,1fr)] grid-rows-[repeat(5,auto)] justify-items-center justify-self-center leading-6 max-w-[2560px] min-h-[1000px] gap-y-[60px] translate-x-[-50.0%] w-[225%] z-[1] mx-auto p-5 left-2/4 md:text-lg md:leading-7 md:transform-none md:w-full md:left-auto">
          <div className="text-base items-center box-border caret-transparent grid col-end-[-1] col-start-1 row-end-[-1] row-start-1 grid-cols-subgrid grid-rows-subgrid justify-items-center leading-6 md:text-lg md:leading-7"></div>
          <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 row-end-[span_1] row-start-3 leading-6 z-[1] md:text-lg md:leading-7">
            <section className="relative text-base content-center box-border caret-transparent grid justify-center leading-6 py-5 md:text-lg md:leading-7 md:py-10">
              <div className="relative text-base box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,1fr)] leading-6 gap-y-5 w-[335px] z-[1] mx-auto md:text-lg md:leading-7 md:gap-y-10 md:w-[1160px]">
                <header className="text-base items-center box-border caret-transparent gap-x-[30px] flex flex-col col-end-auto col-start-[span_12] leading-6 gap-y-[30px] text-center w-full md:text-lg md:col-end-[span_10] md:col-start-2 md:leading-7">
                  <div className="text-base box-border caret-transparent gap-x-[30px] flex flex-col leading-6 gap-y-[30px] md:text-lg md:leading-7">
                    <div className="text-base box-border caret-transparent leading-[0px] md:text-lg">
                      <h2
                        aria-label="Whatever your flavor of business, build and grow on your terms."
                        className="text-[32px] box-border caret-transparent tracking-[-0.32px] leading-[38.4px] max-w-full font-exact_block md:text-[56px] md:tracking-[-0.56px] md:leading-[61.6px]"
                      >
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Whatever
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            your
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            flavor
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            of
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            business,
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            build
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            and
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            grow
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            on
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            your
                          </div>
                        </div>
                        <div className="static text-base box-content caret-black block tracking-[normal] leading-[normal] md:relative md:text-[56px] md:aspect-auto md:box-border md:caret-transparent md:inline-block md:tracking-[-0.56px] md:leading-[61.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content caret-black block opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            terms.
                          </div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </header>
                <div className="text-base box-border caret-transparent col-start-[span_12] leading-6 md:text-lg md:leading-7"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
