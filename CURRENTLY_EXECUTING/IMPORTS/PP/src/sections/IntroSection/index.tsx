export const IntroSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip pt-8 pb-4 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pt-[44.8px] md:pb-[22.4px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] md:col-end-[span_10] md:col-start-4">
        <div className="items-center box-border caret-transparent flex flex-col text-center">
          <div className="box-border caret-transparent">
            <h2 className="text-[37px] font-black box-border caret-transparent tracking-[-0.74px] leading-[40.7px] translate-x-[-2.22px] font-paypal_pro md:text-[48.2857px] md:tracking-[-0.965714px] md:leading-[53.1143px] md:translate-x-[-2.89714px]">
              Simple. Secure. Flexible.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
