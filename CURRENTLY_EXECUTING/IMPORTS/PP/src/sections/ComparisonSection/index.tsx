import { ComparisonTable } from "@/sections/ComparisonSection/components/ComparisonTable";

export const ComparisonSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip pt-12 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pt-[67.2px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] pb-4 md:col-end-[span_12] md:pb-[22.4px]">
        <div className="box-border caret-transparent mb-4">
          <div className="box-border caret-transparent">
            <h2 className="text-2xl font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-[48.2857px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.965714px] md:leading-[53.1143px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-2.89714px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
              Compare your checkout options
            </h2>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4">
                <a
                  aria-label="Download PDF"
                  href="https://www.paypalobjects.com/marketing/web23/us/merchant/checkout/paypal-checkout-comparison-table.pdf"
                  className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 text-center border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent col-end-[-1] col-start-1 z-[1] md:col-end-[-3] md:col-start-3">
        <ComparisonTable />
      </div>
      <div className="box-border caret-transparent col-end-[-3] col-start-3 z-[1] pt-4">
        <div className="text-blue-950 box-border caret-transparent">
          <div className="text-black text-sm box-border caret-transparent leading-[21px] font-plain">
            <div className="box-border caret-transparent">
              Fees are subject to change.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
