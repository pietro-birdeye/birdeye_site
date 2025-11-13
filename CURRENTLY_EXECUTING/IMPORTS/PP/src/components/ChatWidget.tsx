export const ChatWidget = () => {
  return (
    <div className="fixed shadow-[rgba(0,0,0,0.16)_0px_4px_16px_0px] box-border caret-transparent w-fit z-[1050] overflow-hidden rounded-xl right-[182px] bottom-5">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="items-center bg-blue-900 box-border caret-transparent flex flex-col h-[220px] justify-center w-[250px] overflow-hidden rounded-l-xl">
            <span
              role="img"
              aria-label="paypal assistant icon"
              className="text-white aspect-square box-border caret-transparent block h-12 w-12"
            >
              <img
                src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/icon-13.svg"
                alt="Icon"
                className="box-border caret-transparent h-full w-full"
              />
            </span>
            <div className="text-white text-lg font-bold box-border caret-transparent leading-6 text-center px-3 font-paypalopen_bold">
              Questions about PayPal for business?
            </div>
            <button className="text-blue-900 text-[15px] font-bold bg-white caret-transparent block leading-[22.5px] min-w-24 text-center border-blue-900 mt-5 px-[30px] py-2.5 rounded-[1000px] border-solid font-paypalsanssmall_regular">
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
