import { Carousel } from "@/sections/CarouselSection/components/Carousel";

export const CarouselSection = () => {
  return (
    <section className="relative bg-black box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip py-12 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:py-[67.2px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-7 col-start-3 z-[1] mb-4 md:col-end-[span_12] md:mb-10">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <h2 className="text-black text-2xl font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-white md:text-[57.6429px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-1.72929px] md:leading-[63.4071px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-3.45857px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
              One platform. Many ways to get paid.
            </h2>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent col-end-[-2] col-start-2 z-[1] md:col-end-[-3] md:col-start-3">
        <Carousel />
      </div>
    </section>
  );
};
