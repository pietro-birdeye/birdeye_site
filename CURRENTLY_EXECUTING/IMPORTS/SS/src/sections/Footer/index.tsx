import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative text-neutral-500 text-sm bg-black box-border caret-transparent leading-[21px] z-[1] mt-auto">
      <div className="box-border caret-transparent w-[335px] mx-auto py-[60px] md:w-[1160px]">
        <FooterNav />
        <p className="text-white box-border caret-transparent leading-7 my-[17.5px]">
          <strong className="font-medium box-border caret-transparent">
            Translation Notice
          </strong>
          : Some content may have been translated using AI to help serve our
          global community. While all of our content is reviewed by humans,
          occasionally pre-reviewed content may be live. If you have any
          questions, please do not hesitate to reach out to Square Support in
          your preferred language.
        </p>
        <FooterBottom />
        <div className="box-border caret-transparent gap-x-5 flex flex-wrap gap-y-5 w-full md:gap-x-0 md:flex-nowrap md:gap-y-0">
          <div className="box-border caret-transparent max-w-full text-center w-full md:text-left">
            <p className="box-border caret-transparent text-center md:text-left">
              © 2025 Block, Inc.
            </p>
          </div>
          <nav className="box-border caret-transparent text-center w-full md:text-right md:w-auto">
            <ul className="box-border caret-transparent gap-x-2.5 flex flex-wrap list-none gap-y-2.5 text-center w-full pl-0 md:text-right">
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="#"
                  className="text-white font-medium box-border caret-transparent hidden text-center md:text-right"
                >
                  Cookie Preferences
                </a>
                <a
                  href="#"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Your Privacy Choices
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/privacy"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Privacy Notice
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/payments/secure"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Security
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/ua"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Terms of Service
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/gov"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Government
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/licenses"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Licenses
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/capital/capital-licenses"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Square Capital, LLC Licenses
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/consumer-health-privacy"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Consumer Health Privacy
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="/us/en/legal/general/dc"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Hardware Compliance Certifications
                </a>
              </li>
              <li className="relative box-border caret-transparent text-center w-full md:text-right">
                <a
                  href="https://block.xyz/"
                  className="text-white font-medium box-border caret-transparent text-center mb-[17.5px] md:text-right"
                >
                  Block, Inc.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
