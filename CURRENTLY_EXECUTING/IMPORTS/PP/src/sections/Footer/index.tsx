import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent gap-x-4 grid grid-cols-[0px_0px_repeat(4,1fr)_0px_0px] max-w-[375px] pt-[45.008px] pb-[60px] md:gap-x-[26.718px] md:grid-cols-[128px_0px_repeat(12,1fr)_0px_128px] md:max-w-screen-xl md:py-[51.2px]">
      <FooterContent />
    </footer>
  );
};
