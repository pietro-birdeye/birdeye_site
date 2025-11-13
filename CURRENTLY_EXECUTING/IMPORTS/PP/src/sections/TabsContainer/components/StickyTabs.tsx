import { TabsSection } from "@/sections/TabsContainer/components/TabsSection";

export const StickyTabs = () => {
  return (
    <div className="sticky bg-white box-border caret-transparent h-[82px] z-[3] top-[50px] md:h-[85px] md:top-[72px]">
      <TabsSection />
    </div>
  );
};
