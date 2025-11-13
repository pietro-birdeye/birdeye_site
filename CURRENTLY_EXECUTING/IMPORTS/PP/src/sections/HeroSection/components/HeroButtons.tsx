export const HeroButtons = () => {
  return (
    <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 md:[align-items:normal] md:gap-x-6 md:justify-normal md:gap-y-6">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center gap-y-4">
          <a
            aria-label="Sign Up"
            href="https://www.paypal.com/bizsignup/entry?product=checkout"
            className="relative text-white text-base font-black items-center bg-black box-border caret-transparent block h-fit justify-center leading-5 min-w-24 border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:text-black hover:bg-cyan-300"
          >
            Sign Up
          </a>
          <a
            aria-label="Contact Sales"
            href="https://www.paypal.com/us/business/contact-sales"
            className="relative text-base font-black items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] box-border caret-transparent block h-fit justify-center leading-5 min-w-24 border px-[31px] py-[13px] rounded-[1000px] border-solid font-paypal_pro md:text-[17.1429px] md:leading-[21.1429px] md:px-[32.1429px] md:py-[13.5714px] hover:shadow-none"
          >
            Contact Sales
          </a>
        </div>
        <div className="box-border caret-transparent flex justify-center">
          <div className="text-sm box-border caret-transparent leading-[21px] max-w-[513.238px] font-plain">
            <div className="box-border caret-transparent">
              <span className="box-border caret-transparent">
                Get in touch,{" "}
              </span>
              <a
                href="tel://18557871001"
                className="font-medium box-border caret-transparent inline-block underline hover:text-blue-800 hover:border-blue-800"
              >
                1-855-787-1001
              </a>
              <span className="box-border caret-transparent">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
