export type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  priceSubtext: string;
  buttonText: string;
  buttonHref: string;
  showBadge?: boolean;
  badgeText?: string;
  headerVariant?: string;
  buttonVariant?: string;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="text-base box-border caret-transparent gap-x-[30px] grid row-start-[span_3] [grid-template-areas:'title''cost''cta'] grid-rows-[1fr] leading-6 opacity-20 gap-y-[30px] translate-y-[100px] px-0 py-5 rounded-[10px] border-l-0 border-white md:text-lg md:gap-x-10 md:grid-rows-subgrid md:leading-7 md:gap-y-10 md:px-10 md:py-0 md:rounded-none md:border-l">
      <div className="text-base box-border caret-transparent gap-x-2.5 flex flex-col col-end-[title] col-start-[title] row-end-[title] row-start-[title] leading-6 gap-y-2.5 mb-0 md:text-lg md:leading-7 md:mb-10">
        <div
          className={`text-base box-border caret-transparent leading-6 mb-2.5 pb-2.5 border-b border-white md:text-lg md:leading-7 md:mb-0 md:pb-0 md:border-b-0 ${props.headerVariant || ""}`}
        >
          <h2 className="text-xl font-medium box-border caret-transparent leading-[26px] max-w-[505.599px] font-cash_sans md:text-[28px] md:leading-[36.4px] md:max-w-[707.843px]">
            {props.title}
          </h2>
          {props.showBadge && (
            <span className="text-black text-[12.6593px] font-medium bg-white box-border caret-transparent block tracking-[0.12px] leading-[9px] translate-y-[-3px] p-2.5 rounded-[10px] font-cash_sans md:text-[14.0659px] md:tracking-[0.14px] md:leading-[10px] md:translate-y-[-5px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-[12.6593px] before:not-italic before:normal-nums before:font-medium before:tracking-[0.12px] before:leading-[9px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:mt-0 before:border-separate before:font-cash_sans before:md:text-[14.0659px] before:md:tracking-[0.14px] before:md:leading-[10px] before:md:-mt-px after:accent-auto after:box-border after:caret-transparent after:text-black after:table after:text-[12.6593px] after:not-italic after:normal-nums after:font-medium after:tracking-[0.12px] after:leading-[9px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:mb-0 after:border-separate after:font-cash_sans after:md:text-[14.0659px] after:md:tracking-[0.14px] after:md:leading-[10px] after:md:mb-px">
              {props.badgeText}
            </span>
          )}
        </div>
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
          <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
            <p className="text-base box-border caret-transparent leading-6 max-w-[548.241px] font-cash_sans md:text-lg md:leading-[27px] md:max-w-[616.766px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <p className="text-[42px] font-medium box-border caret-transparent tracking-[-0.42px] leading-[46.2px] max-w-full font-exact_block md:text-[38px] md:tracking-[-0.38px] md:leading-[41.8px]">
          {props.price}
        </p>
        <div className="text-base box-border caret-transparent leading-6 mt-2.5 font-exact_block md:text-lg md:leading-7">
          <p className="text-base box-border caret-transparent leading-6 max-w-[548.241px] font-cash_sans md:text-lg md:leading-[27px] md:max-w-[616.766px]">
            {props.priceSubtext}
          </p>
        </div>
      </div>
      <div className="text-base box-border caret-transparent col-end-[cta] col-start-[cta] row-end-[cta] row-start-[cta] leading-6 md:text-lg md:leading-7">
        <a
          href={props.buttonHref}
          className="text-black text-base font-medium box-border caret-transparent inline-block leading-4 text-center rounded-[100px] md:text-lg md:leading-[18px]"
        >
          <span
            className={`relative text-base items-center box-border caret-transparent inline-flex justify-center leading-4 min-w-[120px] w-full px-[30px] py-5 rounded-[100px] md:text-sm md:leading-[14px] md:min-w-[200px] md:px-5 md:py-4 before:accent-auto before:box-border before:caret-transparent before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-sm before:md:leading-[14px] ${props.buttonVariant || "text-white before:text-white"}`}
          >
            <span className="relative text-base box-border caret-transparent block leading-4 md:text-sm md:leading-[14px]">
              {props.buttonText}{" "}
              <span className="text-base box-border caret-transparent shrink-0 leading-4 text-nowrap md:text-sm md:leading-[14px]"></span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};
