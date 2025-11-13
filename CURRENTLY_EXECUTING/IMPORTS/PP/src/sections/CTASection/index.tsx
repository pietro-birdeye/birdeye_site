export const CTASection = () => {
  return (
    <section className="relative bg-blue-900 box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip py-12 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:py-[67.2px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent flex col-end-[-3] col-start-3 justify-center z-[1]">
        <div className="items-center box-border caret-transparent flex flex-col text-center">
          <div className="box-border caret-transparent">
            <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
              <h2 className="text-white text-[28px] font-black box-border caret-transparent tracking-[-0.56px] leading-[32.2px] font-paypal_pro md:text-[34px] md:tracking-[-0.68px] md:leading-[39.1px]">
                PayPal Open
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <h3 className="text-white text-[42.5px] font-black box-border caret-transparent tracking-[-1.275px] leading-[46.75px] translate-x-[-2.55px] font-paypal_pro md:text-[57.6429px] md:tracking-[-1.72929px] md:leading-[63.4071px] md:translate-x-[-3.45857px]">
              One platform for all business
            </h3>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <p className="text-white text-base box-border caret-transparent leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              Get paid. Get growing. Get ahead.
            </p>
            <p className="text-white text-base box-border caret-transparent leading-6 max-w-[733.201px] pt-2 font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              Do more with the platform designed to power commerce.
            </p>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center gap-y-4">
                <a
                  aria-label="Sign Up"
                  href="https://www.paypal.com/bizsignup/entry?product=checkout"
                  className="relative text-base font-black items-center bg-white box-border caret-transparent block h-fit justify-center leading-5 min-w-24 border px-[31px] py-[13px] rounded-[1000px] border-solid border-white font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:bg-cyan-300"
                >
                  Sign Up
                </a>
                <a
                  aria-label="Contact Sales"
                  href="https://www.paypal.com/us/business/contact-sales"
                  className="relative text-white text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 border px-[31px] py-[13px] rounded-[1000px] border-solid border-white font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
