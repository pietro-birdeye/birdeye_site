import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatWidget } from "@/components/ChatWidget";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block h-full tracking-[normal] leading-[18.4px] list-outside list-disc max-w-full pointer-events-auto text-start indent-[0px] normal-case visible overflow-auto border-separate font-plain md:max-w-none">
      <div className="box-border caret-transparent">
        <div className="bg-stone-100 box-border caret-transparent">
          <div className="box-border caret-transparent"></div>
          <div className="box-border caret-transparent">
            <Header />
          </div>
          <Main />
          <div className="bg-white box-border caret-transparent">
            <div className="bg-black box-border caret-transparent">
              <div className="text-white text-sm font-medium box-border caret-transparent leading-5 font-plain">
                <Footer />
              </div>
              <div className="text-white text-sm font-medium box-border caret-transparent gap-x-4 grid col-end-[-3] col-start-3 grid-cols-[0px_0px_repeat(4,1fr)_0px_0px] leading-5 max-w-[375px] pb-[100px] font-plain md:gap-x-[26.718px] md:grid-cols-[128px_0px_repeat(12,1fr)_0px_128px] md:max-w-screen-xl md:pb-[60px]">
                <div className="font-normal box-border caret-transparent col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]"></div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      1
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    Nielsen, commissioned by PayPal, Nielsen Behavioral Panel of
                    USA with 29,000 monthly average desktop purchase
                    transactions with small- and medium-sized merchants, from
                    13,000 consumers from April 2022 – March 2023.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] ml-3 pt-2 md:col-end-[15]">
                  <div className="font-medium box-border caret-transparent leading-5">
                    Checkout conversion percentage is measured from the point at
                    which the customer starts to pay on websites that accept
                    PayPal.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      2
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    Nielsen Survey, Commissioned by PayPal, Nielsen Media
                    Attitudinal Survey of USA (Feb 2023) with 3,999 recent
                    purchasers (past 2 weeks) from large enterprise merchants,
                    including 1,999 PayPal transactions and 2,000 non-PayPal
                    transactions.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] ml-3 pt-2 md:col-end-[15]">
                  <div className="font-medium box-border caret-transparent leading-5">
                    Base N. PayPal users = 3,350.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      3
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    Nielsen, commissioned by PayPal, Nielsen Attitudinal Survey
                    of USA (June 2023) with 2,001 recent purchasers (past 4
                    weeks) from small- and medium-sized merchants, including
                    1,000 PayPal transactions &amp; 1,001 non-PayPal
                    transactions.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] ml-3 pt-2 md:col-end-[15]">
                  <div className="font-medium box-border caret-transparent leading-5">
                    Base N. PayPal users = 1,443.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      4
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    Venmo is available only in the US.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      5
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    <span className="box-border caret-transparent">
                      Available on eligible purchases.{" "}
                    </span>
                    <a
                      href="https://www.paypal.com/us/legalhub/paypal/useragreement-full#seller-protection"
                      className="box-border caret-transparent underline hover:text-sky-200 hover:border-sky-200"
                    >
                      Limits apply
                    </a>
                    <span className="box-border caret-transparent">.</span>
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      6
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    <span className="box-border caret-transparent">
                      Chargebacks that are not related to fraud or item not
                      received (INR), such as broken Item, significantly not as
                      described (SNAD), refund not processed, and duplicate
                      charge, are not protected by Chargeback Protection.
                      Chargeback Protection is available for accounts enrolled
                      in{" "}
                    </span>
                    <a
                      href="https://www.paypal.com/us/legalhub/paypal/pocpsa-full"
                      className="box-border caret-transparent underline hover:text-sky-200 hover:border-sky-200"
                    >
                      Advanced Credit and Debit Card Payments
                    </a>
                    <span className="box-border caret-transparent">
                      . May be subject to additional fees.
                    </span>
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      7
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    Availability varies by country and integration.
                  </div>
                </div>
                <div className="font-normal box-border caret-transparent flex col-end-7 col-start-3 leading-[21px] pt-2 md:col-end-[15]">
                  <div className="text-[9.6px] font-medium box-border caret-transparent leading-5">
                    <sup className="relative text-[7.2px] box-border caret-transparent inline-block leading-[0px] min-w-3 top-0">
                      8
                    </sup>
                  </div>
                  <div className="font-medium box-border caret-transparent leading-5">
                    <span className="box-border caret-transparent">
                      Rates may vary depending on the checkout options you
                      choose and the payment method used. Explore our{" "}
                    </span>
                    <a
                      href="https://www.paypal.com/us/business/paypal-business-fees"
                      className="box-border caret-transparent underline hover:text-sky-200 hover:border-sky-200"
                    >
                      fees page
                    </a>
                    <span className="box-border caret-transparent">
                      {" "}
                      for more details.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="/auth/recaptcha/grcenterprise_v3.html"
        className="fixed box-border caret-transparent hidden h-[66px] w-[74px] z-[2147483000] right-[1.5px] bottom-[30px]"
      ></iframe>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <CookieBanner />
          </div>
        </div>
      </div>
      <ChatWidget />
      <iframe
        alt=""
        src="https://s.company-target.com/s/sync?exc=lr"
        className="box-border caret-transparent hidden h-0 w-0"
      ></iframe>
      <img
        alt=""
        src="https://id.rlcdn.com/464526.gif"
        className="aspect-[auto_0_/_0] box-border caret-transparent hidden h-0 w-0"
      />
    </body>
  );
};
