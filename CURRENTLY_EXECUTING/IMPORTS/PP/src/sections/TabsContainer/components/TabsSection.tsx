export const TabsSection = () => {
  return (
    <section className="relative box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] gap-y-0 overflow-auto py-2 md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:py-[11.2px]">
      <div className="relative items-center box-border caret-transparent gap-x-4 flex col-end-[-2] col-start-2 justify-center min-w-max gap-y-4 z-[1]">
        <div
          role="tablist"
          className="items-center bg-gray-100 box-border caret-transparent flex rounded-[96px]"
        >
          <a
            role="tab"
            href="#paypal-checkout"
            className="relative text-blue-700 self-center box-border caret-transparent flex leading-[22.4px] text-center text-nowrap z-0 m-0.5 px-4 py-2.5 md:px-[22.6119px] md:py-[14.9589px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-blue-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:z-[-1] before:rounded-[88px] before:border-separate before:inset-0 before:font-plain"
          >
            <span className="text-black text-xs font-black box-border caret-transparent block leading-4 max-w-[626.405px] text-nowrap font-paypal_pro md:text-[15.3059px] md:leading-[19.3059px] md:max-w-[798.5px]">
              PayPal Checkout
            </span>
          </a>
          <a
            role="tab"
            href="#expanded-checkout"
            className="relative text-blue-700 self-center box-border caret-transparent flex leading-[22.4px] text-center text-nowrap z-0 m-0.5 px-4 py-2.5 md:px-[22.6119px] md:py-[14.9589px] before:accent-auto before:box-border before:caret-transparent before:text-blue-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:z-[-1] before:rounded-[88px] before:border-separate before:inset-1 before:font-plain"
          >
            <span className="text-stone-500 text-xs font-black box-border caret-transparent block leading-4 max-w-[626.405px] text-nowrap font-paypal_pro md:text-[15.3059px] md:leading-[19.3059px] md:max-w-[798.5px]">
              Expanded Checkout
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
