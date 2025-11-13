export const VideoTestimonialSection = () => {
  return (
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
  );
};
