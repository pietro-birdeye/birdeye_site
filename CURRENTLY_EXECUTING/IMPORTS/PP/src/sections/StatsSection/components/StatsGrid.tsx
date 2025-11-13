import { StatCard } from "@/sections/StatsSection/components/StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-rows-min grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 md:gap-x-6 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-6">
      <StatCard
        percentage="46%"
        description="average increase in conversions."
        footnoteNumber="1"
        hasPaddingBottom={true}
      />
      <StatCard
        percentage="74%"
        description="of PayPal users are more likely to purchase from an unknown merchant when PayPal is there."
        footnoteNumber="2"
      />
      <StatCard
        percentage="66%"
        description="of PayPal users prefer to pay with PayPal."
        footnoteNumber="3"
        hasPaddingBottom={true}
      />
    </div>
  );
};
