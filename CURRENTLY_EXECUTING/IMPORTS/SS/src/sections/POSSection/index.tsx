import { POSNav } from "@/sections/POSSection/components/POSNav";
import { MobilePOSSection } from "@/sections/POSSection/components/MobilePOSSection";

export const POSSection = () => {
  return (
    <div
      role="region"
      className="relative text-base [align-items:normal] box-border caret-transparent grid grid-cols-[1fr] leading-6 max-w-[335px] w-full md:text-lg md:items-center md:grid-cols-[100px_repeat(12,1fr)_100px] md:leading-7 md:max-w-none"
    >
      <div className="text-base box-border caret-transparent gap-x-[normal] hidden flex-row col-end-auto col-start-auto justify-normal leading-6 min-h-0 min-w-0 gap-y-[normal] md:text-lg md:gap-x-[140px] md:flex md:flex-col md:col-end-[span_4] md:col-start-2 md:justify-between md:leading-7 md:min-h-[auto] md:min-w-[auto] md:gap-y-[140px]">
        <POSNav />
      </div>
      <MobilePOSSection />
    </div>
  );
};
