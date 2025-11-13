import { StickyTabs } from "@/sections/TabsContainer/components/StickyTabs";
import { TabContent } from "@/sections/TabsContainer/components/TabContent";

export const TabsContainer = () => {
  return (
    <div className="relative bg-white box-border caret-transparent scroll-mt-[50px] md:scroll-mt-[72px]">
      <div className="absolute bg-white box-border caret-transparent h-full pointer-events-none w-full inset-0"></div>
      <div className="box-border caret-transparent">
        <StickyTabs />
        <div className="bg-white box-border caret-transparent col-end-[-3] col-start-3 z-[1] py-0 md:py-[11.2px]"></div>
        <TabContent />
      </div>
    </div>
  );
};
