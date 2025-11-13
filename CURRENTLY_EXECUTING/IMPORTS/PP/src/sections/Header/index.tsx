import { HeaderContainer } from "@/sections/Header/components/HeaderContainer";
import { HeaderPlaceholder } from "@/sections/Header/components/HeaderPlaceholder";

export const Header = () => {
  return (
    <header className="absolute bg-transparent box-border caret-transparent h-auto max-h-none min-h-14 text-center w-full z-[1000] md:bg-white md:h-full md:max-h-[88px] md:min-h-[88px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-14 before:tracking-[normal] before:leading-[18.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:top-0 before:font-plain before:md:h-[88px] after:accent-auto after:border-b-stone-300 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18.4px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-b after:border-separate after:top-14 after:font-plain after:md:top-[88px]">
      <div className="bg-transparent box-border caret-transparent h-auto md:bg-white md:h-full">
        <HeaderContainer />
      </div>
      <HeaderPlaceholder />
    </header>
  );
};
