export type PricingDetailProps = {
  title: string;
  percentage: string;
  transactionFee: string;
  footnoteNumber: string;
};

export const PricingDetail = (props: PricingDetailProps) => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative bg-slate-100 box-border caret-transparent flex flex-col h-full">
        <div className="box-border caret-transparent flex flex-col w-full p-6 md:p-8">
          <div className="box-border caret-transparent">
            <p className="text-base font-normal box-content caret-black leading-[normal] max-w-none font-times md:text-[20.3571px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[28.5px] md:max-w-[921.573px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
              {props.title}
            </p>
          </div>
          <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
            <div className="[align-items:normal] box-border caret-transparent flex flex-row w-full pt-5 pb-3 md:items-start md:flex-col">
              <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
                <div className="items-center box-border caret-transparent flex shrink-0 flex-wrap mr-4">
                  <strong className="font-bold box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                    <span className="text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] font-times md:text-[34px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:block md:tracking-[-0.68px] md:leading-[39.1px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                      {props.percentage}
                    </span>
                    <span className="text-[21px] font-black box-border caret-transparent block tracking-[-0.42px] leading-[25.2px] min-h-[auto] min-w-[auto] font-paypal_pro md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px] md:min-h-0 md:min-w-0">
                      %
                    </span>
                  </strong>
                </div>
              </div>
              <div className="box-border caret-transparent basis-6/12 grow">
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent hidden flex-wrap mb-2 md:flex md:mb-0">
                    <strong className="font-bold box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                      <span className="text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 font-times md:text-[34px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:block md:tracking-[-0.68px] md:leading-[39.1px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                        {props.percentage}
                      </span>
                      <span className="text-[21px] font-black box-border caret-transparent block tracking-[-0.42px] leading-[25.2px] min-h-0 min-w-0 font-paypal_pro md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                        %
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="self-auto box-border caret-transparent mt-0 md:mt-4">
                  <div className="text-base box-content caret-black block leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:inline md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                    + {props.transactionFee} per transaction
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
