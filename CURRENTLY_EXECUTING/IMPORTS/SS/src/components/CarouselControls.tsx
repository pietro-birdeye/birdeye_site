export type CarouselControlsProps = {
  variant: string;
  nextIconUrl: string;
  nextIconClassName?: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  return (
    <div
      className={`text-base items-center box-border caret-transparent gap-x-2.5 leading-6 gap-y-2.5 w-[335px] mx-auto md:text-lg md:gap-x-5 md:leading-7 md:gap-y-5 md:w-auto ${props.variant}`}
    >
      <button
        aria-label="Go to previous slide"
        className={`relative text-base items-center bg-transparent caret-transparent flex h-[50px] justify-center leading-[normal] opacity-20 w-[50px] p-0 rounded-[100%] md:text-lg ${props.variant === "hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]" ? "min-h-0 min-w-0 transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[100px]" : "min-h-[auto] min-w-[auto] translate-y-[100px] md:min-h-0 md:min-w-0 md:transform-none"}`}
      >
        <img
          src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-72.svg"
          alt="Icon"
          className="relative text-base box-border caret-transparent h-[22px] w-[21px] z-[1] md:text-lg"
        />
      </button>
      <button
        aria-label="Go to next slide"
        className={`relative text-base items-center bg-transparent caret-transparent flex h-[50px] justify-center leading-[normal] opacity-20 w-[50px] p-0 rounded-[100%] md:text-lg ${props.variant === "hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]" ? "min-h-0 min-w-0 transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[100px]" : "min-h-[auto] min-w-[auto] translate-y-[100px] md:min-h-0 md:min-w-0 md:transform-none"}`}
      >
        <img
          src={props.nextIconUrl}
          alt="Icon"
          className={`relative text-base box-border caret-transparent h-[22px] w-[21px] z-[1] md:text-lg ${props.nextIconClassName || ""}`}
        />
      </button>
    </div>
  );
};
