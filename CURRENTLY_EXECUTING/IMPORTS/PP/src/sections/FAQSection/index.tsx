import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-clip py-12 scroll-mt-[50px] md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:py-[67.2px] md:scroll-mt-[72px]">
      <div className="box-border caret-transparent col-end-[-3] col-start-3 z-[1]">
        <div className="box-border caret-transparent mb-[15px] md:mb-[51.2px]">
          <div className="box-border caret-transparent">
            <h2 className="text-[37px] font-black box-border caret-transparent tracking-[-0.74px] leading-[40.7px] translate-x-[-2.22px] mb-10 font-paypal_pro md:text-[48.2857px] md:tracking-[-0.965714px] md:leading-[53.1143px] md:translate-x-[-2.89714px] md:mb-16">
              Frequently asked questions
            </h2>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent col-end-[-3] col-start-3 z-[1]">
        <FAQItem
          question="Why do the card processing prices differ between PayPal Checkout and Expanded Checkout?"
          isExpanded={true}
          iconContainerVariant="rotate-[135deg]"
          answer={
            <>
              <p className="text-base box-border caret-transparent leading-6 max-w-[733.201px] pt-2 font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[90%]">
                <span className="text-base box-border caret-transparent leading-6 md:text-[17.1429px] md:leading-[25.7143px]">
                  With PayPal Checkout, you pay a little more than you would for
                  Expanded Checkout because we manage the checkout experience.
                  That means you don&#39;t need to worry about handling
                  unauthorized transactions and chargebacks or{" "}
                </span>
                <a
                  href="https://www.paypal.com/us/brc/article/pci-dss-compliance-basics"
                  className="text-base font-medium box-border caret-transparent leading-6 underline md:text-[17.1429px] md:leading-[25.7143px] hover:text-blue-800 hover:border-blue-800"
                >
                  compliance reporting
                </a>
                <span className="text-base box-border caret-transparent leading-6 md:text-[17.1429px] md:leading-[25.7143px]">
                  —we&#39;ll take care of that.
                </span>
              </p>
              <p className="text-base box-border caret-transparent leading-6 max-w-[733.201px] pt-2 font-plain md:text-[17.1429px] md:leading-[25.7143px] md:max-w-[90%]">
                With Expanded Checkout, you pay a lower fee since you’re
                managing checkout and handle refunds and chargebacks for any
                unauthorized transactions. You&#39;ll also be responsible for
                compliance reporting.
              </p>
            </>
          }
        />
        <FAQItem question="What is a payment API?" />
        <FAQItem question="Are you PCI compliant?" />
      </div>
    </section>
  );
};
