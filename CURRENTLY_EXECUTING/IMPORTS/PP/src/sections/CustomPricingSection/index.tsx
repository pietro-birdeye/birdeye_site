export const CustomPricingSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip pb-12 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pb-[67.2px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] md:col-end-[span_12]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <p className="text-base box-border caret-transparent leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              <span className="text-base box-border caret-transparent leading-6 md:text-[17.1429px] md:leading-[25.7143px]">
                Custom pricing for established businesses that process a large
                volume of payments annually.{" "}
              </span>
              <a
                href="https://www.paypal.com/us/business/contact-sales"
                className="text-base font-medium box-border caret-transparent leading-6 underline md:text-[17.1429px] md:leading-[25.7143px] hover:text-blue-800 hover:border-blue-800"
              >
                Contact us
              </a>
            </p>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <div className="box-border caret-transparent">
              <div className="text-sm box-border caret-transparent leading-[21px] font-plain">
                <div className="box-border caret-transparent">
                  Standard rate for domestic transactions. Fees are subject to
                  change.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
