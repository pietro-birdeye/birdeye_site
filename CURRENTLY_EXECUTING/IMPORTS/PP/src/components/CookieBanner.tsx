export const CookieBanner = () => {
  return (
    <div className="fixed box-border caret-transparent hidden justify-center w-full z-[1051] px-4 left-0 bottom-4">
      <div className="[align-items:normal] bg-slate-100 shadow-[rgba(0,0,0,0.01)_0px_0px_17px_0px,rgba(0,0,0,0.01)_0px_0px_15px_0px,rgba(0,0,0,0.02)_0px_0px_13px_0px,rgba(0,0,0,0.03)_0px_-10px_10px_0px,rgba(0,0,0,0.04)_0px_0px_5px_0px] box-border caret-transparent flex max-w-screen-xl w-full p-4 rounded-2xl md:items-center md:py-6">
        <span className="aspect-square box-border caret-transparent block h-8 w-8">
          <img
            src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-11.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </span>
        <div className="[align-items:normal] box-border caret-transparent flex flex-col md:items-center md:flex-row">
          <div className="box-border caret-transparent hidden basis-auto grow-0 mb-4 mx-2 md:basis-[0%] md:grow-[3] md:mb-0 md:mx-3">
            <h4 className="font-medium box-border caret-transparent tracking-[-0.16px] leading-5 font-paypalopen_medium">
              If you accept cookies, we’ll use them to improve and customize
              your experience and enable our partners to show you personalized
              PayPal ads when you visit other sites.{" "}
              <a
                href="https://www.paypal.com/myaccount/privacy/cookiePrefs?locale=en_US"
                className="text-sky-600 box-border caret-transparent underline"
              >
                Manage cookies and learn more
              </a>
            </h4>
          </div>
          <div className="box-border caret-transparent flex px-0 md:px-6">
            <button className="relative text-sm font-medium items-center bg-white/70 caret-transparent flex justify-center tracking-[-0.28px] leading-[18px] min-h-12 min-w-24 text-center w-full border-gray-300 mr-1 px-[30px] py-2.5 rounded-[1000px] border-solid font-paypalopen_medium md:w-auto md:mr-2 hover:bg-slate-100">
              Accept
            </button>
            <button className="relative text-sm font-medium items-center bg-white/70 caret-transparent flex justify-center tracking-[-0.28px] leading-[18px] min-h-12 min-w-24 text-center w-full border-gray-300 ml-1 px-[30px] py-2.5 rounded-[1000px] border-solid font-paypalopen_medium md:w-auto md:ml-2 hover:bg-slate-100">
              Decline
            </button>
          </div>
        </div>
        <button
          type="button"
          className="relative text-neutral-500 items-center bg-transparent caret-transparent flex h-12 justify-center text-center w-12 p-3 rounded-[50%] hover:bg-slate-50"
        >
          <span className="aspect-square box-border caret-transparent block h-6 pointer-events-none w-6">
            <img
              src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-12.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </span>
        </button>
      </div>
    </div>
  );
};
