import { Heading } from "@/components/Heading";
import { CTAButtons } from "@/components/CTAButtons";

export const ContentSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
      <section className="relative text-white text-base content-center box-border caret-transparent grid justify-center leading-6 overflow-hidden pt-5 pb-10 md:text-lg md:leading-7 md:pt-10 md:pb-20">
        <div className="relative text-base box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,1fr)] leading-6 gap-y-[30px] w-[335px] z-[1] mx-auto md:text-lg md:leading-7 md:gap-y-[60px] md:w-[1160px]">
          <header className="text-base items-center box-border caret-transparent gap-x-[30px] flex flex-col col-end-auto col-start-[span_12] leading-6 gap-y-[30px] text-center w-full md:text-lg md:col-end-[span_10] md:col-start-2 md:leading-7">
            <div className="text-base box-border caret-transparent gap-x-[30px] flex flex-col leading-6 gap-y-[30px] md:text-lg md:leading-7">
              <Heading />
            </div>
            <CTAButtons />
          </header>
        </div>
      </section>
    </section>
  );
};
