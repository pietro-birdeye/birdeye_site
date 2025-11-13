import { PricingCard } from "@/sections/PricingCardsSection/components/PricingCard";

export const PricingCardsSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(auto,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(auto,auto)] max-w-[375px] gap-y-4 overflow-clip pb-4 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:gap-y-[22.8496px] md:pb-[22.4px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent gap-x-4 grid col-end-[-1] col-start-1 grid-cols-[1fr] overflow-x-scroll overflow-y-auto gap-y-4 z-[1] px-8 md:grid-cols-[repeat(2,1fr)] md:px-[173.699px]">
        <PricingCard
          title="PayPal Checkout"
          cardType="Credit and debit cards"
          percentage="2.99"
          transactionFee="0.49"
        />
        <PricingCard
          title="Expanded Checkout"
          cardType="Credit and debit cards"
          percentage="2.89"
          transactionFee="0.29"
          additionalInfo={
            <>
              <div className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                Add Chargeback Protection for an additional 0.40% per
                transaction.
                <sup className="static text-[13.3333px] box-content caret-black leading-[normal] align-super top-auto md:relative md:text-[12.8571px] md:aspect-auto md:box-border md:caret-transparent md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-6.42857px] md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  6
                </sup>
              </div>
              <div className="text-base box-content caret-black block leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:inline md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                <a
                  href="https://www.paypal.com/us/brc/article/what-is-interchange-plus-plus"
                  className="font-normal box-content caret-black no-underline md:font-medium md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:underline md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-800 hover:border-blue-800"
                >
                  Interchange++ pricing
                </a>
                <span className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                   available.
                </span>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};
