export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href?: string;
  }>;
  hasNestedColumn?: boolean;
  nestedColumnTitle?: string;
  nestedColumnLinks?: Array<{
    text: string;
    href?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent min-h-0 min-w-0 text-center w-auto md:min-h-[auto] md:min-w-[auto] md:text-left md:w-[calc(25%_-_22.5px)]">
      <button className="bg-transparent caret-transparent inline-block leading-[normal] text-center p-0 md:hidden md:text-left">
        <h6 className="relative text-base font-medium box-border caret-transparent leading-6 text-center mb-2.5 md:leading-7 md:text-left">
          {props.title}
        </h6>
      </button>
      <h6 className="text-base font-medium box-border caret-transparent hidden leading-6 text-center mb-2.5 md:block md:leading-7 md:text-left">
        {props.title}
      </h6>
      <div className="box-border caret-transparent h-0 opacity-0 text-center overflow-hidden pb-0 md:h-auto md:opacity-100 md:text-left md:overflow-visible md:pb-[30px]">
        <ul className="box-border caret-transparent gap-x-[30px] flex flex-wrap list-none gap-y-2.5 text-center w-full pl-0 md:text-left">
          {props.links.map((link, index) => (
            <li
              key={index}
              className="relative box-border caret-transparent text-center w-full md:text-left"
            >
              {link.href ? (
                <a
                  href={link.href}
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-left"
                >
                  {link.text}
                </a>
              ) : (
                <a className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-left">
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {props.hasNestedColumn && (
        <div className="box-border caret-transparent text-center md:text-left">
          <button className="bg-transparent caret-transparent inline-block leading-[normal] text-center p-0 md:hidden md:text-left">
            <h6 className="relative text-base font-medium box-border caret-transparent leading-6 text-center mb-2.5 md:leading-7 md:text-left">
              {props.nestedColumnTitle}
            </h6>
          </button>
          <h6 className="text-base font-medium box-border caret-transparent hidden leading-6 text-center mb-2.5 md:block md:leading-7 md:text-left">
            {props.nestedColumnTitle}
          </h6>
          <div className="box-border caret-transparent h-0 opacity-0 text-center overflow-hidden pb-0 md:h-auto md:opacity-100 md:text-left md:overflow-visible md:pb-[30px]">
            <ul className="box-border caret-transparent gap-x-[30px] flex flex-wrap list-none gap-y-2.5 text-center w-full pl-0 md:text-left">
              {props.nestedColumnLinks?.map((link, index) => (
                <li
                  key={index}
                  className="relative box-border caret-transparent text-center w-full md:text-left"
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-left"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <a className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-left">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
