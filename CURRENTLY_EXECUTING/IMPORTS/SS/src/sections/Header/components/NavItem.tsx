import React from "react";

export type NavItemProps = {
  label: string;
  variant: string;
  href?: string;
  hasDropdown: boolean;
  dropdownVariant?: string;
  categories?: Array<{
    title: string;
    sections?: Array<{
      heading: string;
      links: Array<{
        href: string;
        text: string;
        icon?: string;
        iconClassName?: string;
        subtitle?: string;
      }>;
    }>;
    imageLinks?: Array<{
      href: string;
      imageSrc: string;
      imageAlt: string;
      text: string;
      subtitle?: string;
    }>;
  }>;
  footerLinks?: Array<{
    href: string;
    text: string;
  }>;
};

export const NavItem = (props: NavItemProps) => {
  if (!props.hasDropdown) {
    return (
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
        <a
          href={props.href}
          className="relative text-white text-base font-medium box-border caret-transparent inline-block leading-6 text-center text-nowrap align-middle overflow-hidden px-2.5 py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]"
        >
          <span className="text-base box-border caret-transparent leading-6 text-nowrap md:text-lg md:leading-[27px]">
            {props.label}
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
      <button className="relative text-white text-base font-medium bg-transparent caret-transparent leading-6 text-center text-nowrap align-middle overflow-hidden px-2.5 py-[18px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-lg md:leading-[27px]">
        <span className="text-base box-border caret-transparent leading-6 text-nowrap md:text-lg md:leading-[27px]">
          {props.label}
        </span>
      </button>
      <div className="absolute text-base box-border caret-transparent hidden leading-6 w-full pt-10 pb-20 px-20 left-0 -top-1 md:text-lg md:leading-7 md:top-[68px]">
        <div
          className={`text-base box-border caret-transparent gap-x-5 grid auto-rows-min grid-cols-[33%_1fr] leading-6 w-full md:text-lg md:leading-7 ${props.dropdownVariant}`}
        >
          {props.categories?.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <div className="text-base box-border caret-transparent col-start-1 leading-6 md:text-lg md:leading-7">
                <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                  <button className="relative text-xl font-medium items-center bg-transparent caret-transparent gap-x-2.5 inline-flex leading-[26px] max-w-[505.599px] gap-y-2.5 text-center text-nowrap align-middle overflow-hidden px-0 py-[5px] rounded-bl rounded-br rounded-tl rounded-tr font-cash_sans md:text-[28px] md:leading-[36.4px] md:max-w-[707.843px]">
                    <span className="text-xl box-border caret-transparent block leading-[26px] text-nowrap md:text-[28px] md:leading-[36.4px]">
                      {category.title}
                    </span>
                  </button>
                </div>
              </div>
              {category.imageLinks ? (
                <div className="text-base box-border caret-transparent hidden col-start-2 row-end-8 row-start-1 leading-6 md:text-lg md:leading-7">
                  <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                    <ul className="text-base items-start box-border caret-transparent gap-x-5 flex flex-col leading-6 max-w-[780px] gap-y-5 pl-0 md:text-lg md:leading-7">
                      <ul className="text-base box-border caret-transparent gap-x-5 grid basis-[0%] grow grid-cols-[repeat(auto-fit,minmax(124px,1fr))] justify-start leading-6 gap-y-5 w-full pl-0 md:text-lg md:leading-7">
                        {category.imageLinks.map((link, linkIndex) => (
                          <li
                            key={linkIndex}
                            className="text-base box-border caret-transparent block leading-6 md:text-lg md:leading-7"
                          >
                            <a
                              href={link.href}
                              className="relative text-base items-center box-border caret-transparent flex flex-col h-[120px] leading-6 min-w-[124px] overflow-hidden p-2.5 rounded-[10px] md:text-lg md:leading-7"
                            >
                              <picture className="relative text-base box-border caret-transparent block h-16 leading-6 md:text-lg md:leading-7">
                                <img
                                  alt={link.imageAlt}
                                  src={link.imageSrc}
                                  className="text-base box-border caret-transparent h-16 leading-6 max-w-full object-cover w-[73px] md:text-lg md:leading-7"
                                />
                              </picture>
                              <div className="relative text-base box-border caret-transparent leading-6 pt-2.5 md:text-lg md:leading-7">
                                <span className="text-xs font-medium box-border caret-transparent block leading-3 text-center text-nowrap font-cash_sans">
                                  {link.text}
                                </span>
                                {link.subtitle && (
                                  <span className="text-xs box-border caret-transparent block leading-3 text-center text-nowrap mt-1 font-cash_sans">
                                    {link.subtitle}
                                  </span>
                                )}
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </div>
                </div>
              ) : category.sections ? (
                <div
                  className={`text-base box-border caret-transparent hidden col-start-2 row-start-1 leading-6 md:text-lg md:leading-7 ${props.dropdownVariant === "grid-rows-[repeat(4,auto)_1fr]" ? "row-end-6" : props.dropdownVariant === "grid-rows-[repeat(1,auto)_1fr]" ? "row-end-3" : ""}`}
                >
                  <ul
                    className={
                      props.dropdownVariant === "grid-rows-[repeat(4,auto)_1fr]"
                        ? "text-base items-start box-border caret-transparent gap-x-5 flex leading-6 gap-y-5 w-full pl-0 md:text-lg md:leading-7 max-w-[720px]"
                        : "text-base items-start box-border caret-transparent gap-x-5 flex leading-6 max-w-[350px] gap-y-5 w-full pl-0 md:text-lg md:leading-7"
                    }
                  >
                    {category.sections.map((section, sectionIndex) => (
                      <li
                        key={sectionIndex}
                        className={
                          props.dropdownVariant ===
                          "grid-rows-[repeat(4,auto)_1fr]"
                            ? sectionIndex === 0
                              ? "text-base box-border caret-transparent gap-x-5 flex flex-col leading-6 gap-y-5 md:text-lg md:leading-7 w-[calc(50%_-_10px)]"
                              : "text-base box-border caret-transparent block leading-6 w-[calc(50%_-_10px)] md:text-lg md:leading-7"
                            : "text-base box-border caret-transparent gap-x-5 flex flex-col leading-6 gap-y-5 w-full md:text-lg md:leading-7"
                        }
                      >
                        <div className="text-base box-border caret-transparent gap-x-3 flex flex-col leading-6 gap-y-3 md:text-lg md:leading-7">
                          <span className="text-zinc-500 text-xs font-medium box-border caret-transparent block tracking-[0.12px] leading-[18px] max-w-full w-max font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                            {section.heading}
                          </span>
                          <ul className="text-base box-border caret-transparent leading-6 pl-0 md:text-lg md:leading-7">
                            {section.links.map((link, linkIndex) => (
                              <li
                                key={linkIndex}
                                className="text-base box-border caret-transparent block leading-6 md:text-lg md:leading-7"
                              >
                                <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                                  <a
                                    href={link.href}
                                    className="relative text-base font-medium items-center box-border caret-transparent gap-x-2.5 inline-flex leading-6 max-w-[404.481px] gap-y-2.5 text-left align-top overflow-hidden p-0.5 rounded-md font-cash_sans md:text-lg md:leading-[27px] md:max-w-[455.037px]"
                                  >
                                    {link.icon && (
                                      <span className="text-base items-center box-border caret-transparent flex leading-6 md:text-lg md:leading-[27px]">
                                        <img
                                          src={link.icon}
                                          alt="Icon"
                                          className={
                                            link.iconClassName ||
                                            "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]"
                                          }
                                        />
                                      </span>
                                    )}
                                    <span className="text-base box-border caret-transparent block leading-6 max-w-[404.481px] py-[3px] md:text-lg md:leading-[27px] md:max-w-[455.037px]">
                                      {link.text}
                                    </span>
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-base box-border caret-transparent hidden col-start-2 row-end-8 row-start-1 leading-6 md:text-lg md:leading-7">
                  <ul className="text-base items-start box-border caret-transparent gap-x-5 flex leading-6 max-w-[350px] gap-y-5 w-full pl-0 md:text-lg md:leading-7">
                    <li className="text-base box-border caret-transparent gap-x-5 flex flex-col leading-6 gap-y-5 w-full md:text-lg md:leading-7">
                      <div className="text-base box-border caret-transparent gap-x-3 flex flex-col leading-6 gap-y-3 md:text-lg md:leading-7">
                        <span className="text-zinc-500 text-xs font-medium box-border caret-transparent block tracking-[0.12px] leading-[18px] max-w-full w-max font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                          Discover
                        </span>
                        <ul className="text-base box-border caret-transparent leading-6 pl-0 md:text-lg md:leading-7"></ul>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
          {props.footerLinks && (
            <div className="text-base box-border caret-transparent col-start-1 leading-6 pt-5 md:text-lg md:leading-7">
              <ul className="text-base box-border caret-transparent gap-x-2.5 flex flex-col leading-6 gap-y-2.5 pl-0 md:text-lg md:leading-7">
                {props.footerLinks.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-base box-border caret-transparent block leading-6 md:text-lg md:leading-7"
                  >
                    <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                      <a
                        href={link.href}
                        className="text-base font-medium box-border caret-transparent leading-6 max-w-[404.481px] font-cash_sans md:text-lg md:leading-[27px] md:max-w-[455.037px]"
                      >
                        <span className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                          {link.text}
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
