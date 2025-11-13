import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterNav = () => {
  return (
    <nav className="box-border caret-transparent gap-x-[normal] block flex-nowrap gap-y-[normal] text-center w-auto mb-[30px] md:gap-x-[30px] md:flex md:flex-wrap md:gap-y-[30px] md:text-left md:w-full">
      <FooterColumn
        title="Products"
        links={[
          { text: "Point of sale", href: "/us/en/point-of-sale" },
          { text: "Payments", href: "/us/en/payments" },
          { text: "Websites", href: "/us/en/online-store" },
          {
            text: "Kiosk",
            href: "/us/en/point-of-sale/restaurants/kiosk-software",
          },
          { text: "Invoices", href: "/us/en/invoices" },
          { text: "Marketing", href: "/us/en/marketing" },
          { text: "Loyalty", href: "/us/en/software/loyalty" },
          {
            text: "Customer Directory",
            href: "/us/en/point-of-sale/features/customer-directory",
          },
          { text: "Banking", href: "/us/en/banking" },
          { text: "Staff", href: "/us/en/staff" },
          { text: "Payroll", href: "/us/en/payroll" },
          { text: "Buy Now, Pay Later", href: "/us/en/buy-now-pay-later" },
          { text: "Hardware", href: "/us/en/hardware" },
          { text: "Business software & solutions", href: "/us/en/software" },
        ]}
      />
      <FooterColumn
        title="Business Types"
        links={[
          { text: "Food & Beverage", href: "/us/en/point-of-sale/restaurants" },
          { text: "Quick Service", href: "/us/en/restaurants/quick-service" },
          { text: "Full Service", href: "/us/en/restaurants/full-service" },
          { text: "Bars & Breweries", href: "/us/en/restaurants/bars" },
          { text: "Retail", href: "/us/en/point-of-sale/retail" },
          { text: "Beauty Salon", href: "/us/en/beauty/salons" },
          { text: "Barbershop", href: "/us/en/beauty/barbershop" },
          { text: "Hair Salon", href: "/us/en/beauty/hair-salon" },
          { text: "Nail Salon", href: "/us/en/beauty/nail-salon" },
          { text: "Day Spa", href: "/us/en/industry/spa" },
          {
            text: "Tattoo & Piercing",
            href: "/us/en/beauty/tattoo-and-piercing",
          },
          { text: "Med spa", href: "/us/en/beauty/med-spa" },
          { text: "Fitness", href: "/us/en/industry/fitness" },
          {
            text: "Professional Services",
            href: "/us/en/services/professional-services",
          },
          { text: "Home & Repair", href: "/us/en/services/home-and-repair" },
          { text: "Franchises", href: "/us/en/franchises" },
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          { text: "Pricing", href: "/us/en/pricing" },
          { text: "Why Square?", href: "/us/en/why-square" },
          { text: "The Bottom Line", href: "/us/en/the-bottom-line" },
          { text: "Sales", href: "/us/en/sales" },
          { text: "Support", href: "https://squareup.com/help/us/en" },
          { text: "Square Community", href: "https://community.squareup.com/" },
          {
            text: "Developer Platform",
            href: "https://developer.squareup.com/us/en",
          },
          {
            text: "Merchant Services",
            href: "/us/en/payments/merchant-services",
          },
          {
            text: "Rent Hardware",
            href: "https://square.fello.com/?utm_source=square&utm_medium=footer",
          },
        ]}
      />
      <FooterColumn
        title="Contact"
        links={[
          { text: "Customer support: 1 (855) 700-6000" },
          { text: "Sales: 1 (800) 470-1673" },
        ]}
        hasNestedColumn={true}
        nestedColumnTitle="Square"
        nestedColumnLinks={[
          { text: "About", href: "/us/en/about" },
          { text: "Press & Media", href: "/us/en/press" },
          { text: "Careers", href: "https://block.xyz/careers/jobs" },
          { text: "Referrals", href: "/us/en/referral-program" },
          { text: "Partners", href: "/us/en/partnerships" },
        ]}
      />
    </nav>
  );
};
