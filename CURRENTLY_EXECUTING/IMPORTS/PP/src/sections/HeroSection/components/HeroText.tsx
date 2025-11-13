export const HeroText = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col text-center">
      <div className="box-border caret-transparent">
        <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
          <h1 className="text-[32px] font-bold box-content caret-black leading-[normal] max-w-none min-h-0 min-w-0 font-times md:text-[17.1429px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[775.757px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
            Online checkout
          </h1>
        </div>
      </div>
      <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
        <h2 className="text-2xl font-bold box-content caret-black tracking-[normal] leading-[normal] transform-none font-times md:text-[69px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:tracking-[-2.07px] md:leading-[75.9px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-4.14px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-paypal_pro">
          Boost sales with a checkout built to grow
        </h2>
      </div>
      <div className="box-border caret-transparent mt-4 md:mt-[18.2857px]">
        <p className="text-base box-content caret-black leading-[normal] max-w-none font-times md:text-[17.1429px] md:aspect-auto md:box-border md:caret-transparent md:leading-[25.7143px] md:max-w-[784.748px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-plain">
          Offer millions of customers in 200+ markets the checkout stack that
          features their favorite ways to pay.
        </p>
      </div>
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
    </div>
  );
};
