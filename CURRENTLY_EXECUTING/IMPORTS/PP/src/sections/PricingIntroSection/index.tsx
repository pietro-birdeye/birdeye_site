export const PricingIntroSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip pt-12 pb-8 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pt-[67.2px] md:pb-[44.8px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] md:col-end-[span_12]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <h2 className="text-[37px] font-black box-border caret-transparent tracking-[-0.74px] leading-[40.7px] translate-x-[-2.22px] font-paypal_pro md:text-[48.2857px] md:tracking-[-0.965714px] md:leading-[53.1143px] md:translate-x-[-2.89714px]">
              Pricing with no surprises
            </h2>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <p className="text-base box-border caret-transparent leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              No monthly or setup fees. Only pay when you get paid.
            </p>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4">
                <a
                  aria-label="More About Fees"
                  href="https://www.paypal.com/us/business/fees"
                  className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 text-center border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                >
                  More About Fees
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
