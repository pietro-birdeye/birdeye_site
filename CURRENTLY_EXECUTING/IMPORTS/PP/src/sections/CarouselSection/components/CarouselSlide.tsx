export type CarouselSlideProps = {
  slideNumber: number;
  totalSlides: number;
  href: string;
  containerClassName?: string;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  const hasContent = props.imageUrl && props.imageAlt && props.title;

  return (
    <div
      role="group"
      aria-label={`Slide ${props.slideNumber} of ${props.totalSlides}`}
      className={`box-border caret-transparent max-w-full w-[311.501px] md:max-w-[398.271px] md:w-[455.075px] ${props.containerClassName || ""}`}
    >
      <a
        href={props.href}
        className="relative text-blue-700 box-border caret-transparent flex flex-col h-full min-w-full hover:bg-zinc-800"
      >
        {hasContent && (
          <>
            <div className="relative aspect-square box-border caret-transparent min-w-[auto] w-full overflow-hidden md:min-w-[50%]">
              <picture className="box-border caret-transparent block leading-[0px]">
                <img
                  alt={props.imageAlt}
                  src={props.imageUrl}
                  className="aspect-square box-border caret-transparent max-w-full object-cover w-full"
                />
              </picture>
            </div>
            <div className="box-border caret-transparent flex flex-col w-full pr-6 py-6 md:pr-10 md:py-10">
              <div className="box-border caret-transparent">
                <p className="text-black text-base box-content caret-black leading-[normal] max-w-none font-times md:text-white md:text-[20.3571px] md:aspect-auto md:box-border md:caret-transparent md:leading-[28.5px] md:max-w-[932.254px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
                  {props.title}
                </p>
              </div>
            </div>
          </>
        )}
      </a>
    </div>
  );
};
