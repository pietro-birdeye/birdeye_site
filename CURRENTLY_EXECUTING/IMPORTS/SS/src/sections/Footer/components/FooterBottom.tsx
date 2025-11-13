import { LanguageSelector } from "@/sections/Footer/components/LanguageSelector";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterBottom = () => {
  return (
    <nav className="border-b-zinc-500/40 border-l-neutral-500 border-r-neutral-500 border-t-zinc-500/40 box-border caret-transparent gap-x-5 flex justify-between gap-y-5 mb-5 py-5 border-b border-t">
      <LanguageSelector />
      <SocialLinks />
    </nav>
  );
};
