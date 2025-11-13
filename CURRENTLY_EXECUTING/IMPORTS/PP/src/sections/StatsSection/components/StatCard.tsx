export type StatCardProps = {
  percentage: string;
  description: string;
  footnoteNumber: string;
  hasPaddingBottom?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-col h-full">
        <div className="box-border caret-transparent flex flex-col w-full pl-4 pr-6 py-6 md:pl-0 md:pr-8 md:py-8">
          <div className="box-border caret-transparent">
            <div
              className={`[align-items:normal] box-border caret-transparent flex flex-row w-full md:items-start md:flex-col${props.hasPaddingBottom ? " pb-3" : ""}`}
            >
              <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
                <div className="items-center box-border caret-transparent flex shrink-0 flex-wrap mr-4">
                  <strong className="font-bold box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                    <span className="text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] font-times md:text-[69px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:block md:tracking-[-2.07px] md:leading-[75.9px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                      {props.percentage}
                    </span>
                  </strong>
                </div>
              </div>
              <div className="box-border caret-transparent basis-6/12 grow">
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent hidden flex-wrap mb-2 md:flex md:mb-0">
                    <strong className="font-bold box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                      <span className="text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 font-times md:text-[69px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:block md:tracking-[-2.07px] md:leading-[75.9px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                        {props.percentage}
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="self-auto box-border caret-transparent mt-0 md:mt-4">
                  <div className="text-base box-content caret-black block leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:inline md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                    {props.description}
                    <sup className="static text-[13.3333px] box-content caret-black leading-[normal] align-super top-auto md:relative md:text-[12.8571px] md:aspect-auto md:box-border md:caret-transparent md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-6.42857px] md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      {props.footnoteNumber}
                    </sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
