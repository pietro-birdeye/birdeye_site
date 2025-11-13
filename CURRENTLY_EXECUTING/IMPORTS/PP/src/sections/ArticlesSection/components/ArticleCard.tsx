export type ArticleCardProps = {
  ariaLabel: string;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
  category1: string;
  category2: string;
  title: string;
  author: string;
  date: string;
  contentType: string;
  containerVariant?: string;
  hasImage?: boolean;
};

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className={`box-border caret-transparent w-[343px] md:w-[455.075px] ${props.containerVariant || ""}`}
    >
      <a
        href={props.href}
        className="text-blue-700 box-border caret-transparent inline-flex flex-col h-full w-full md:flex hover:shadow-[rgb(0,102,245)_0px_0px_0px_2.496px]"
      >
        {props.hasImage && (
          <div className="box-border caret-transparent w-full relative min-h-[204.8px] min-w-full overflow-hidden">
            <picture className="box-border caret-transparent block leading-[0px]">
              <img
                alt={props.imageAlt}
                src={props.imageUrl}
                className="box-border caret-transparent h-[257.12px] max-w-full object-cover w-full md:h-[319.36px]"
              />
            </picture>
          </div>
        )}
        <div className="text-black bg-gray-100 box-border caret-transparent flex basis-[0%] flex-col grow justify-between w-full p-8 md:px-[22.8496px]">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent flex flex-wrap mb-6">
              <span className="text-base border-r-zinc-950/10 box-border caret-transparent block leading-6 max-w-[733.201px] mr-3 pr-3 border-r font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
                {props.category1}
              </span>
              <span className="text-base box-border caret-transparent block leading-6 max-w-[733.201px] mr-3 font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
                {props.category2}
              </span>
            </div>
            <span className="text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] pb-0 font-times md:text-2xl md:font-black md:aspect-auto md:box-border md:caret-transparent md:flow-root md:tracking-[-0.48px] md:leading-[28.8px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pb-0.5 md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
              {props.title}
            </span>
            <div className="box-border caret-transparent flex flex-col mt-3 mb-6">
              <span className="text-base box-border caret-transparent block leading-6 max-w-[733.201px] font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
                Author
                <span className="text-base box-border caret-transparent leading-6 md:text-[17.1429px] md:leading-[25.7143px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-plain before:md:text-[17.1429px] before:md:leading-[25.7143px]">
                  {props.author}
                </span>
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex flex-wrap">
            <span className="text-base border-r-zinc-950/10 box-border caret-transparent block leading-6 max-w-[733.201px] mr-3 pr-3 border-r font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              {props.date}
            </span>
            <span className="text-base box-border caret-transparent block leading-6 max-w-[733.201px] mr-3 font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[784.748px]">
              {props.contentType}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
