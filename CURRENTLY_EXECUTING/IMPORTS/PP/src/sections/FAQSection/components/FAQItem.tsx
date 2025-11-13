export type FAQItemProps = {
  question: string;
  answer?: React.ReactNode;
  isExpanded?: boolean;
  iconUrl?: string;
  containerVariant?: string;
  iconContainerVariant?: string;
};

export const FAQItem = (props: FAQItemProps) => {
  const {
    question,
    answer,
    isExpanded = false,
    iconUrl = "https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-9.svg",
    containerVariant = "border-b-zinc-950/10 mb-6 border-b-2 md:mb-12",
    iconContainerVariant = "",
  } = props;

  return (
    <div
      className={`box-border caret-transparent pb-6 md:pb-12 ${containerVariant}`}
    >
      <h3 className="text-[18.72px] font-bold box-border caret-transparent leading-[21.528px]">
        <button
          type="button"
          className="relative font-normal bg-transparent caret-transparent w-full pt-0 pb-2 px-0"
        >
          <span className="items-start box-border caret-transparent flex justify-between">
            <span className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full">
              <span className="text-[21px] font-black box-border caret-transparent block tracking-[-0.42px] leading-[25.2px] pr-[30px] font-paypal_pro md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
                {question}
              </span>
            </span>
            <span
              className={`box-border caret-transparent block h-auto w-auto md:h-10 md:w-10 ${iconContainerVariant}`}
            >
              <span className="aspect-square box-border caret-transparent inline-block h-8 w-8 md:h-full md:w-full">
                <img
                  src={iconUrl}
                  alt="Icon"
                  className="text-stone-500 box-border caret-transparent h-full w-full"
                />
              </span>
            </span>
          </span>
        </button>
      </h3>
      {isExpanded && answer && (
        <div role="region" className="box-border caret-transparent">
          {answer}
        </div>
      )}
    </div>
  );
};
