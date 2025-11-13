export type FooterLinksProps = {
  links: Array<{
    href: string;
    text: string;
    ariaLabel?: string;
    className?: string;
  }>;
  secondaryLinks?: Array<{
    href: string;
    text: string;
    ariaLabel?: string;
    className?: string;
  }>;
  showDivider?: boolean;
  copyrightText?: string;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <div className="items-center box-border caret-transparent flex flex-wrap justify-between">
      <ul
        className={`box-border caret-transparent w-full pl-0 md:w-auto ${props.secondaryLinks ? "flex flex-wrap" : ""}`}
      >
        {props.links.map((link, index) => (
          <li
            key={index}
            className={
              link.className || "box-border caret-transparent block mr-6 mb-5"
            }
          >
            <a
              href={link.href}
              className="box-border caret-transparent hover:text-sky-200 hover:border-sky-200"
              {...(link.ariaLabel && { "aria-label": link.ariaLabel })}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      {props.showDivider && (
        <hr className="text-zinc-500 border-b-zinc-500 border-l-neutral-400 border-r-neutral-400 border-t-neutral-400 caret-transparent hidden h-0 mx-auto border-b-0" />
      )}
      {props.secondaryLinks && (
        <ul
          className={`box-border caret-transparent w-full pl-0 md:w-auto ${props.copyrightText ? "border-t-neutral-400 basis-[0%] grow mt-5 border-b-white border-x-white border-t md:basis-auto md:grow-0 md:mt-0 md:border-t-white md:border-t-0" : "flex flex-wrap"}`}
        >
          {props.copyrightText && (
            <li className="box-border caret-transparent flex text-stone-300 font-normal leading-[22px] mr-6 mt-5 md:inline-block">
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
                {props.copyrightText}
              </span>
            </li>
          )}
          {props.secondaryLinks.map((link, index) => (
            <li
              key={index}
              className={
                link.className ||
                "box-border caret-transparent inline-block mr-6 mt-5"
              }
            >
              <a
                href={link.href}
                className="box-border caret-transparent hover:text-sky-200 hover:border-sky-200"
                {...(link.ariaLabel && { "aria-label": link.ariaLabel })}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
