export type PricingCardProps = {
  title: string;
  cardType: string;
  percentage: string;
  transactionFee: string;
  additionalInfo?: React.ReactNode;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="items-start bg-slate-100 box-border caret-transparent flex flex-col grow min-w-[260px] w-full p-6">
      <h3 className="text-[18.72px] font-bold box-content caret-black h-auto tracking-[normal] leading-[normal] min-h-0 min-w-0 font-times md:text-[28.6429px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:h-[142px] md:tracking-[-0.572857px] md:leading-[34.3714px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
        {props.title}
      </h3>
      <div className="box-border caret-transparent w-full mb-2">
        <div className="box-border caret-transparent flex flex-col flex-wrap w-full">
          <div className="box-border caret-transparent"></div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="text-base font-normal box-content caret-black block leading-[normal] max-w-none font-times md:text-[17.1429px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:inline md:leading-[25.7143px] md:max-w-[775.757px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                  {props.cardType}
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex flex-wrap mb-2">
                <strong className="font-bold box-border caret-transparent block">
                  <span className="text-base font-normal box-content caret-black tracking-[normal] leading-[normal] font-times md:text-[34px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.68px] md:leading-[39.1px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
                    {props.percentage}
                  </span>
                  <span className="text-[28px] font-black box-border caret-transparent tracking-[-0.56px] leading-[32.2px] font-paypal_pro md:text-[34px] md:tracking-[-0.68px] md:leading-[39.1px]">
                    %
                  </span>
                </strong>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-base box-content caret-black block leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:inline md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                + ${props.transactionFee} per transaction
                <sup className="static text-[13.3333px] box-content caret-black leading-[normal] align-super top-auto md:relative md:text-[12.8571px] md:aspect-auto md:box-border md:caret-transparent md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-6.42857px] md:align-baseline md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  8
                </sup>
              </div>
              {props.additionalInfo}
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
    </div>
  );
};
