import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { IntroSection } from "@/sections/IntroSection";
import { TabsContainer } from "@/sections/TabsContainer";
import { ComparisonSection } from "@/sections/ComparisonSection";
import { PricingIntroSection } from "@/sections/PricingIntroSection";
import { PricingCardsSection } from "@/sections/PricingCardsSection";
import { PricingDetailsSection } from "@/sections/PricingDetailsSection";
import { CustomPricingSection } from "@/sections/CustomPricingSection";
import { CarouselSection } from "@/sections/CarouselSection";
import { FAQSection } from "@/sections/FAQSection";
import { ArticlesSection } from "@/sections/ArticlesSection";
import { CTASection } from "@/sections/CTASection";

export const Main = () => {
  return (
    <div
      role="main"
      className="bg-white box-border caret-transparent max-w-[2240px] mx-auto pt-14 md:pt-[88px]"
    >
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <TabsContainer />
      <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip pt-12 pb-4 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pt-[67.2px] md:pb-[22.4px] md:scroll-mt-[72px]">
        <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] md:col-end-[span_12]">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <h2 className="text-[37px] font-black box-border caret-transparent tracking-[-0.74px] leading-[40.7px] translate-x-[-2.22px] font-paypal_pro md:text-[48.2857px] md:tracking-[-0.965714px] md:leading-[53.1143px] md:translate-x-[-2.89714px]">
                Their code. Your code. Or no code.
              </h2>
            </div>
            <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
              <p className="text-base box-border caret-transparent leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
                We’ve got three easy ways to integrate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip pb-2 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:pb-[11.2px] md:scroll-mt-[72px]">
        <div className="box-border caret-transparent col-end-[-2] col-start-2 z-[1] md:col-end-[-3] md:col-start-3">
          <div className="box-border caret-transparent gap-x-4 grid auto-rows-min grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4">
            <div className="box-border caret-transparent">
              <div className="relative [align-items:normal] bg-gray-100 box-border caret-transparent gap-x-[normal] flex flex-col h-full justify-self-auto max-w-none gap-y-[normal] md:items-center md:gap-x-0 md:flex-row-reverse md:justify-self-center md:max-w-max md:gap-y-0">
                <div className="relative self-auto aspect-[4_/_3] box-border caret-transparent basis-auto grow-0 h-full min-w-[auto] w-full overflow-hidden md:self-stretch md:basis-0 md:grow md:min-w-[50%]">
                  <picture className="box-border caret-transparent block h-auto leading-[0px] md:h-full">
                    <img
                      alt="Bubbles with logos including: GoDaddy, BigCommerce, Wix, and Shopify."
                      src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/41.png"
                      className="aspect-[4_/_3] box-border caret-transparent h-auto max-w-full object-cover w-full md:h-full"
                    />
                  </picture>
                </div>
                <div className="box-border caret-transparent flex flex-col grow w-full p-6 md:p-12">
                  <div className="box-border caret-transparent">
                    <h3 className="text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-[28.6429px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.572857px] md:leading-[34.3714px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-1.71857px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                      Connect your store and start selling
                    </h3>
                  </div>
                  <div className="box-border caret-transparent grow mt-4 md:mt-[18.2857px]">
                    <p className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                      Leave the coding to your eCommerce platform. So you can
                      get back to your business.
                    </p>
                  </div>
                  <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4">
                        <a
                          aria-label="Explore eCommerce Integrations"
                          href="https://www.paypal.com/us/business/platforms-and-marketplaces/directory"
                          className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 text-center border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                        >
                          Explore eCommerce Integrations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip pb-8 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:pb-[44.8px] md:scroll-mt-[72px]">
        <div className="box-border caret-transparent col-end-[-2] col-start-2 z-[1] md:col-end-[-3] md:col-start-3">
          <div className="box-border caret-transparent gap-x-4 grid auto-rows-min grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 md:gap-x-6 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-6">
            <div className="box-border caret-transparent">
              <div className="relative bg-gray-100 box-border caret-transparent gap-x-[normal] flex flex-col h-full gap-y-[normal] md:gap-x-0 md:gap-y-0">
                <div className="relative aspect-[4_/_3] box-border caret-transparent min-w-[auto] w-full overflow-hidden md:min-w-[50%]">
                  <picture className="box-border caret-transparent block h-auto leading-[0px] md:h-full">
                    <img
                      alt="Checkout buttons for PayPal, Venmo, credit card, and Apple Pay."
                      src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/36.png"
                      className="aspect-[4_/_3] box-border caret-transparent h-auto max-w-full object-cover w-full md:h-full"
                    />
                  </picture>
                </div>
                <div className="box-border caret-transparent flex flex-col grow w-full p-6 md:p-12">
                  <div className="box-border caret-transparent">
                    <h3 className="text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-[28.6429px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.572857px] md:leading-[34.3714px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-1.71857px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                      More coding, highly custom
                    </h3>
                  </div>
                  <div className="box-border caret-transparent grow mt-4 md:mt-[18.2857px]">
                    <p className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                      Your developer can use our RESTAPIs and JavaScript SDK to
                      customize our checkout solution for however you do
                      business.
                    </p>
                  </div>
                  <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4">
                        <a
                          aria-label="Explore Developer Docs"
                          href="https://developer.paypal.com/home/?_ga=2.66744045.290709616.1741618302-1470737784.1723482196"
                          className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 text-center border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                        >
                          Explore Developer Docs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="relative bg-gray-100 box-border caret-transparent gap-x-[normal] flex flex-col h-full gap-y-[normal] md:gap-x-0 md:gap-y-0">
                <div className="relative aspect-[4_/_3] box-border caret-transparent min-w-[auto] w-full overflow-hidden md:min-w-[50%]">
                  <picture className="box-border caret-transparent block h-auto leading-[0px] md:h-full">
                    <img
                      alt="PayPal QR code and a link to copy"
                      src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/34.png"
                      className="aspect-[4_/_3] box-border caret-transparent h-auto max-w-full object-cover w-full md:h-full"
                    />
                  </picture>
                </div>
                <div className="box-border caret-transparent flex flex-col grow w-full p-6 md:p-12">
                  <div className="box-border caret-transparent">
                    <h3 className="text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-[28.6429px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.572857px] md:leading-[34.3714px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-1.71857px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                      No code, faster setup
                    </h3>
                  </div>
                  <div className="box-border caret-transparent grow mt-4 md:mt-[18.2857px]">
                    <p className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                      Easily create a link, button, or QR code for a product or
                      service. Then, just copy, paste, and get paid.
                    </p>
                  </div>
                  <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4">
                        <a
                          aria-label="Get Payment Links"
                          href="https://www.paypal.com/us/business/accept-payments/payment-links"
                          className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 text-center border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                        >
                          Get Payment Links
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip py-8 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:py-[44.8px] md:scroll-mt-[72px]">
        <div className="[align-items:normal] self-center box-border caret-transparent block col-end-[-2] col-start-2 row-end-auto row-start-auto z-[1] md:items-center md:flex md:col-start-9 md:row-end-2 md:row-start-1">
          <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <div className="relative aspect-square box-border caret-transparent">
              <div
                role="none"
                className="relative box-border caret-transparent h-full leading-[8px] w-full"
              >
                <div className="absolute bg-black box-border caret-transparent h-full opacity-30 w-full"></div>
                <img
                  src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/15.jpg"
                  className="box-border caret-transparent h-full object-cover w-full"
                />
                <div className="absolute items-center box-border caret-transparent flex flex-col translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4">
                  <button
                    aria-label="Play video"
                    type="button"
                    className="items-center bg-transparent caret-transparent flex h-20 leading-[18.4px] text-center w-20 mb-3 p-0 rounded-[50%]"
                  >
                    <img
                      src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-3.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-20 w-20"
                    />
                  </button>
                  <p className="text-white text-base box-border caret-transparent leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
                    Play Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center box-border caret-transparent col-end-[-3] col-start-3 row-end-auto row-start-auto z-[1] pt-8 pb-0 md:col-end-8 md:row-end-2 md:row-start-1 md:py-12">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent h-20 max-w-40 md:h-[100px] md:max-w-[200px]">
                <div className="relative box-border caret-transparent">
                  <picture className="box-border caret-transparent block leading-[0px]">
                    <img
                      alt="Fandango logo"
                      src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/39.png"
                      className="box-border caret-transparent max-w-full object-cover"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
              <h3 className="text-black text-[18.72px] font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-white md:text-[34px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.68px] md:leading-[39.1px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-2.04px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                “PayPal has been a great partner in terms of scalability
                and reliability.”
              </h3>
            </div>
            <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
              <p className="text-black text-base font-normal box-content caret-black leading-[normal] max-w-none font-times md:text-white md:text-[17.1429px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[775.757px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                — Greg Ferris, SVP and Chief Product Officer, Fandango
              </p>
            </div>
          </div>
        </div>
      </section>
      <ComparisonSection />
      <PricingIntroSection />
      <PricingCardsSection />
      <PricingDetailsSection />
      <CustomPricingSection />
      <CarouselSection />
      <FAQSection />
      <ArticlesSection />
      <CTASection />
    </div>
  );
};
