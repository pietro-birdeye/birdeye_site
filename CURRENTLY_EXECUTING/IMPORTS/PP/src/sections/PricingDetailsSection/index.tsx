import { PricingDetail } from "@/sections/PricingDetailsSection/components/PricingDetail";

export const PricingDetailsSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip pb-8 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:pb-[44.8px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-[-2] col-start-2 z-[1] md:col-end-[-3] md:col-start-3">
        <div className="box-border caret-transparent gap-x-4 grid auto-rows-min grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 md:gap-x-6 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-6">
          <PricingDetail
            title="PayPal"
            percentage="3.49"
            transactionFee="$0.49"
            footnoteNumber="8"
          />
          <PricingDetail
            title="Venmo"
            percentage="3.49"
            transactionFee="$0.49"
            footnoteNumber="8"
          />
          <PricingDetail
            title="Pay Later"
            percentage="4.99"
            transactionFee="$0.49"
            footnoteNumber="8"
          />
        </div>
      </div>
    </section>
  );
};
