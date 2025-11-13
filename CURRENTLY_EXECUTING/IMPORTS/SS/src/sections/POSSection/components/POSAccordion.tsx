export type POSAccordionProps = {
  title: string;
  description: string;
  linkUrl: string;
  isOpen?: boolean;
  detailsClassName?: string;
  summaryClassName?: string;
  iconClassName?: string;
};

export const POSAccordion = (props: POSAccordionProps) => {
  const detailsClass =
    props.detailsClassName ||
    "text-base box-border caret-transparent leading-6 max-w-[335px] opacity-20 overflow-y-clip transform-none w-full mx-auto md:text-lg md:leading-7 md:max-w-[1160px] md:translate-y-[100px] border-t-neutral-300 border-t";
  const summaryClass =
    props.summaryClassName ||
    "text-base box-border caret-transparent list-item leading-6 list-none py-[30px] md:text-lg md:leading-7";
  const iconClass =
    props.iconClassName ||
    "relative text-base box-border caret-transparent block h-[15px] leading-6 min-h-0 min-w-0 w-[15px] md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[3px] before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:absolute before:text-start before:indent-[0px] before:normal-case before:transform-none before:visible before:w-[15px] before:border-separate before:left-2/4 before:top-2/4 before:font-square_sans_text_vf before:md:text-lg before:md:leading-7 before:md:translate-x-[-7.5px] before:md:translate-y-[-1.5px] after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[3px] after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:visible after:w-[15px] after:border-separate after:left-2/4 after:top-2/4 after:font-square_sans_text_vf after:md:text-lg after:md:leading-7 after:md:translate-x-[-7.5px] after:md:translate-y-[-1.5px] before:pointer-events-auto after:pointer-events-auto after:md:rotate-90";

  return (
    <details className={detailsClass}>
      <summary className={summaryClass}>
        <div className="text-base items-center box-border caret-transparent gap-x-5 flex justify-between leading-6 gap-y-5 md:text-lg md:leading-7">
          <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <p className="text-base box-border caret-transparent leading-6 max-w-[548.241px] font-cash_sans md:text-lg md:leading-[27px] md:max-w-[616.766px]">
                <span className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                  <b className="text-base font-medium box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                    {props.title}
                  </b>
                </span>
              </p>
            </div>
          </div>
          <span className={iconClass}></span>
        </div>
      </summary>
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <div className="text-base box-border caret-transparent gap-x-[60px] flex flex-col leading-6 gap-y-[60px] mt-0 pb-[30px] md:text-lg md:leading-7 md:mt-[-30px]">
          <div className="text-base box-border caret-transparent h-fit leading-6 min-h-0 min-w-0 w-full pt-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto] md:pt-2.5">
            <div className="text-base box-border caret-transparent flex flex-col leading-6 max-w-full md:text-lg md:leading-7">
              <p className="text-base box-border caret-transparent leading-6 max-w-[548.241px] min-h-0 min-w-0 font-cash_sans md:text-lg md:leading-[27px] md:max-w-[616.766px] md:min-h-[auto] md:min-w-[auto]">
                {props.description}
              </p>
              <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 mt-5 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
                <a
                  href={props.linkUrl}
                  className="text-base box-border caret-transparent inline-block leading-6 md:text-lg md:leading-[27px]"
                >
                  <span className="relative text-base font-medium box-border caret-transparent inline-block leading-6 md:text-lg md:leading-[27px]">
                    Learn{" "}
                    <span className="text-base box-border caret-transparent shrink-0 leading-6 text-nowrap md:text-lg md:leading-[27px]">
                      more{" "}
                      <span className="text-base box-border caret-transparent inline-block leading-6 text-nowrap ml-[4.04481px] md:text-lg md:leading-[27px] md:ml-[4.55037px]">
                        <img
                          src="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-71.svg"
                          alt="Icon"
                          className="text-base box-border caret-transparent inline-block h-[9.2928px] leading-6 text-nowrap w-[9.2928px] md:text-lg md:h-[10.4544px] md:leading-[27px] md:w-[10.4544px]"
                        />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
};
