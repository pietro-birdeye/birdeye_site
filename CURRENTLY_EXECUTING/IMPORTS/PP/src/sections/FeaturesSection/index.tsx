export type FeaturesSectionProps = {
  variant: string;
  tagline?: string;
  features?: Array<{
    title: string;
    description: string;
    videoSrc: string;
    videoPoster: string;
    videoAriaLabel: string;
  }>;
};

export const FeaturesSection = (props: FeaturesSectionProps) => {
  if (props.variant === "simple") {
    return (
      <section
        className={`md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-4 overflow-clip py-4 md:gap-y-[22.8496px] md:py-[22.4px]`}
      >
        <div className=" box-border caret-transparent col-end-7 col-start-3 z-[1] md:col-end-[span_10] md:col-start-4">
          <div className=" items-center box-border caret-transparent flex flex-col text-center">
            <div className=" box-border caret-transparent">
              <p className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                {props.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl static bg-transparent box-content caret-black gap-x-[normal] block auto-rows-auto grid-cols-none grid-rows-none max-w-none gap-y-[normal] py-0 md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:grid md:auto-rows-[minmax(50px,auto)] md:grid-rows-[minmax(50px,auto)] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-clip md:[mask-position:0%] md:bg-left-top md:py-[44.8px] md:scroll-m-0 md:scroll-p-[auto]`}
    >
      <div className=" box-content caret-black gap-x-[normal] block flex-row col-end-auto col-start-auto row-end-auto row-start-auto justify-normal min-h-0 min-w-0 gap-y-[normal] z-auto md:aspect-auto md:box-border md:caret-transparent md:gap-x-8 md:flex md:flex-col md:col-end-[-3] md:col-start-10 md:row-end-[span_1] md:row-start-1 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        {props.features?.map((feature, index) => (
          <div key={index}>
            <div className="static box-content caret-black block flex-row min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <details className="static box-content caret-black min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <summary className="caret-black block justify-normal list-disc md:aspect-auto md:caret-transparent md:flex md:justify-between md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <p className="text-base font-normal caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 font-times md:text-2xl md:font-black md:aspect-auto md:caret-transparent md:tracking-[-0.48px] md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                    {feature.title}
                  </p>
                </summary>
                <div className="caret-black h-auto md:aspect-auto md:caret-transparent md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div
                    className={
                      index === 0
                        ? "caret-black mt-0 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-[15.311px] md:scroll-m-0 md:scroll-p-[auto]"
                        : "caret-black opacity-100 transform-none mt-0 md:aspect-auto md:caret-transparent md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[0.75px] md:translate-y-[0.75px] md:[mask-position:0%] md:bg-left-top md:mt-[15.311px] md:scroll-m-0 md:scroll-p-[auto]"
                    }
                  >
                    <div
                      className={
                        index === 0
                          ? "caret-black md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          : "caret-black opacity-100 transform-none md:aspect-auto md:caret-transparent md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-3 md:translate-y-3 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      }
                    >
                      <p className="text-base caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
              <div className="static bg-transparent box-content caret-black h-auto min-h-0 min-w-0 w-auto mt-0 md:relative md:aspect-auto md:bg-stone-300 md:box-border md:caret-transparent md:h-0.5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:mt-[15.311px] md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static bg-transparent box-content caret-black content-[normal] h-auto w-auto md:absolute md:aspect-auto md:bg-blue-900 md:box-border md:caret-transparent md:content-['_'] md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
              </div>
            </div>
            <div
              className={
                index === 0
                  ? "[align-items:normal] box-content caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none min-h-0 min-w-0 w-auto z-auto md:content-center md:items-center md:aspect-[1.37_/_1] md:box-border md:caret-transparent md:flex md:col-end-9 md:col-start-1 md:row-end-[span_1] md:row-start-1 md:h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  : "[align-items:normal] box-content caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none min-h-0 min-w-0 opacity-100 w-auto z-auto md:content-center md:items-center md:aspect-[1.37_/_1] md:box-border md:caret-transparent md:flex md:col-end-9 md:col-start-1 md:row-end-[span_1] md:row-start-1 md:h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              }
            >
              <div className="static box-content caret-black min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div
                  role="none"
                  className="static box-content caret-black leading-[normal] w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:leading-[8px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                >
                  <video
                    playsinline={true}
                    loop={true}
                    aria-label={feature.videoAriaLabel}
                    poster={feature.videoPoster}
                    className="box-content caret-black block max-w-none object-contain align-middle md:aspect-auto md:box-border md:caret-transparent md:inline md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  >
                    <source
                      src={feature.videoSrc}
                      type="video/mp4"
                      className="caret-black leading-[normal] font-times md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-times_new_roman"
                    />
                    <track className="caret-black leading-[normal] font-times md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-times_new_roman" />
                  </video>
                  <div className="static box-content caret-black w-auto right-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[4.5%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-0 md:bottom-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[8px] after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:pb-[100%] after:md:border-separate after:md:font-plain">
                    <button
                      aria-label="Play video"
                      type="button"
                      className="static [align-items:normal] bg-zinc-100 box-border caret-black inline-block h-auto leading-[normal] text-center w-auto rounded-none right-auto bottom-auto md:absolute md:items-center md:aspect-auto md:bg-transparent md:box-content md:caret-transparent md:flex md:h-10 md:leading-[18.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:right-full md:bottom-full"
                    >
                      <img
                        src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-2.svg"
                        alt="Icon"
                        className="caret-black h-auto align-middle w-auto rounded-none md:aspect-auto md:caret-transparent md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
