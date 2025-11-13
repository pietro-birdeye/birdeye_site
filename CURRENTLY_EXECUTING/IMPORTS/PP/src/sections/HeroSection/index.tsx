import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroImage } from "@/sections/HeroSection/components/HeroImage";

export const HeroSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent gap-x-4 grid auto-rows-[minmax(50px,auto)] grid-cols-[[left-edge-rail]_0px_[left-outer-rail]_0px_[left-inner]_repeat(4,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_0px_[right-edge-rail]] grid-rows-[minmax(50px,auto)] max-w-[375px] min-h-[375px] gap-y-8 z-0 overflow-clip pb-4 md:gap-x-[22.8496px] md:grid-cols-[[left-edge-rail]_128px_[left-outer-rail]_0px_[left-inner]_repeat(12,[inner]_1fr)_[right-inner]_0px_[right-outer-rail]_128px_[right-edge-rail]] md:max-w-screen-xl md:min-h-0 md:gap-y-[44.8px] md:pb-[22.4px]">
      <HeroContent />
      <HeroImage />
    </section>
  );
};
