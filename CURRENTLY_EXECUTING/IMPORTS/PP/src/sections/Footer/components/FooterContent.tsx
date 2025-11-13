import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent col-end-7 col-start-3 w-full md:col-end-[15]">
      <FooterLogo />
      <div className="box-border caret-transparent">
        <FooterLinks
          links={[
            { href: "/us/cshelp/personal", text: "Help" },
            { href: "/us/smarthelp/contact-us", text: "Contact" },
            { href: "/us/digital-wallet/paypal-consumer-fees", text: "Fees" },
            { href: "/us/security", text: "Security Center" },
            { href: "/us/privacy-center/home", text: "Privacy Center" },
            { href: "/us/webapps/mpp/shopping-selection", text: "Shop" },
            { href: "/us/digital-wallet/mobile-apps", text: "Apps" },
            { href: "/us/enterprise", text: "Enterprise" },
            {
              href: "/us/enterprise/industry-solutions/platforms-and-marketplaces",
              text: "Partners",
            },
          ]}
          secondaryLinks={[
            {
              href: "/us/webapps/mpp/country-worldwide",
              text: "See all countries/regions",
              ariaLabel: "See all countries/regions",
              className:
                "items-center box-border caret-transparent flex flex-row-reverse ml-[-3.008px] mb-5 md:ml-0",
            },
          ]}
        />
      </div>
      <div className="box-border caret-transparent">
        <div className="items-center box-border caret-transparent flex flex-wrap justify-between">
          <hr className="text-zinc-500 border-b-zinc-500 border-l-neutral-400 border-r-neutral-400 border-t-neutral-400 caret-transparent flex basis-[0%] grow h-0 mx-auto border-b-0" />
        </div>
      </div>
      <div className="box-border caret-transparent">
        <FooterLinks
          links={[
            {
              href: "https://about.pypl.com/about-us/default.aspx",
              text: "About",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "https://newsroom.paypal-corp.com/",
              text: "Newsroom",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "https://careers.pypl.com/home/",
              text: "Jobs",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "https://investor.pypl.com/home/default.aspx",
              text: "Investor Relations",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "https://about.pypl.com/how-we-work/issues-and-advocacy/default.aspx",
              text: "Government Relations",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
          ]}
          secondaryLinks={[
            {
              href: "/us/webapps/mpp/accessibility",
              text: "Accessibility",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "https://www.paypal.com/us/legalhub/privacy-full",
              text: "Privacy Statement",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "/myaccount/privacy/cookiePrefs",
              text: "Cookies",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "/us/legalhub/home",
              text: "Legal",
              className: "box-border caret-transparent inline-block mr-6 mt-5",
            },
            {
              href: "/us/webapps/mpp/licenses",
              text: "Licenses",
              className: "box-border caret-transparent inline-block mt-5",
            },
          ]}
          showDivider={true}
          copyrightText="© 1999–2025"
        />
      </div>
      <div className="box-border caret-transparent">
        <FooterLegal />
      </div>
    </div>
  );
};
