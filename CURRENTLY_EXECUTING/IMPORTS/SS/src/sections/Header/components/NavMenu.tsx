import { NavItem } from "@/sections/Header/components/NavItem";

export const NavMenu = () => {
  return (
    <ul className="text-base box-border caret-transparent flex leading-6 list-none min-h-0 min-w-0 pl-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
      <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavItem
          label="Business types"
          variant=""
          hasDropdown={true}
          dropdownVariant="grid-rows-[repeat(4,auto)_1fr]"
          categories={[
            {
              title: "Food & Beverage",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    { href: "/us/en/restaurants", text: "Overview" },
                    {
                      href: "/us/en/restaurants/switch-to-square",
                      text: "Switch to Square",
                    },
                  ],
                },
                {
                  heading: "",
                  links: [
                    {
                      href: "/us/en/restaurants/coffee-shop",
                      text: "Coffee shops",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-2.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/quick-service",
                      text: "Quick service",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-3.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/full-service",
                      text: "Full service",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-4.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/bars",
                      text: "Bars & breweries",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-5.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/food-truck",
                      text: "Food trucks",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-6.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/caterers",
                      text: "Catering",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-7.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/restaurants/bakery",
                      text: "Bakeries",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-8.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Retail",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    { href: "/us/en/retail", text: "Overview" },
                    {
                      href: "/us/en/retail/switch-to-square",
                      text: "Switch to Square",
                    },
                  ],
                },
                {
                  heading: "",
                  links: [
                    {
                      href: "/us/en/retail/clothing",
                      text: "Clothing",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-9.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/retail/home-and-gift",
                      text: "Home & gift",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-10.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/retail/wine-and-liquor",
                      text: "Wine & liquor",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-5.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/retail/grocery",
                      text: "Grocery",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-11.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/retail/garden",
                      text: "Garden",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-12.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Beauty",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    { href: "/us/en/beauty", text: "Overview" },
                    {
                      href: "/us/en/beauty/switch-to-square",
                      text: "Switch to Square",
                    },
                  ],
                },
                {
                  heading: "",
                  links: [
                    {
                      href: "/us/en/beauty/salons",
                      text: "Beauty salon",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-13.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/beauty/nail-salon",
                      text: "Nail salon",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-14.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/beauty/hair-salon",
                      text: "Hair salon",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-15.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/solutions/spa",
                      text: "Day spa",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-16.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[22px] leading-6 w-[22px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/beauty/barbershop",
                      text: "Barbershop",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-17.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/beauty/tattoo-and-piercing",
                      text: "Tattoo & piercing",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-18.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/beauty/med-spa",
                      text: "Med spa",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-19.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Services",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    { href: "/us/en/services", text: "Overview" },
                    {
                      href: "/us/en/services/switch-to-square",
                      text: "Switch to Square",
                    },
                  ],
                },
                {
                  heading: "",
                  links: [
                    {
                      href: "/us/en/services/home-and-repair",
                      text: "Home & commercial",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-20.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/automotive",
                      text: "Automotive services",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-21.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/transportation",
                      text: "Transportation",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-22.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/contractors",
                      text: "Contractors & specialists",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-23.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/professional-services",
                      text: "Professional services",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-24.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/pet-services",
                      text: "Pet services",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-25.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/nonprofit",
                      text: "Organizations & nonprofits",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-26.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/cleaning-services",
                      text: "Cleaning services",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-27.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/landscapers",
                      text: "Landscaping & outdoors",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-28.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/services/group-recreation",
                      text: "Recreation",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-29.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/industry/healthcare",
                      text: "Healthcare",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-30.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </li>
      <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavItem
          label="Products"
          variant="grid-rows-[repeat(6,auto)_1fr]"
          hasDropdown={true}
          dropdownVariant="grid-rows-[repeat(6,auto)_1fr]"
          categories={[
            {
              title: "Hardware",
              imageLinks: [
                {
                  href: "/us/en/hardware/handheld",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/PD05653_-_Handheld_Subnav.png",
                  imageAlt: "",
                  text: "Handheld",
                },
                {
                  href: "/us/en/hardware/terminal",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Terminal.png",
                  imageAlt: "",
                  text: "Terminal",
                },
                {
                  href: "/us/en/hardware/register",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Register.png",
                  imageAlt: "",
                  text: "Register",
                },
                {
                  href: "/us/en/hardware/stand",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Stand.png",
                  imageAlt: "",
                  text: "Stand",
                },
                {
                  href: "/us/en/hardware/kiosk",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Kiosk.png",
                  imageAlt: "",
                  text: "Kiosk",
                },
                {
                  href: "/us/en/hardware/contactless-chip-reader",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Reader_Contactless.png",
                  imageAlt: "",
                  text: "Reader",
                  subtitle: "for contactless and chip",
                },
                {
                  href: "/us/en/hardware/reader",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Reader_Magstripe.png",
                  imageAlt: "",
                  text: "Reader",
                  subtitle: "for magstripe",
                },
                {
                  href: "/shop/hardware/v2/us/en/products/accessories",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Accessories.png",
                  imageAlt: "",
                  text: "Accessories",
                },
                {
                  href: "/shop/hardware/us/en/pos-kits",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/Kits.png",
                  imageAlt: "",
                  text: "Kits",
                },
                {
                  href: "/us/en/hardware",
                  imageSrc:
                    "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/image.png",
                  imageAlt: "",
                  text: "All hardware",
                },
              ],
            },
            {
              title: "Payments",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    {
                      href: "/us/en/payments",
                      text: "Payments overview",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-31.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale",
                      text: "Point of sale",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-32.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale/restaurants",
                      text: "Restaurants POS",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-4.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale/retail",
                      text: "Retail POS",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-33.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/appointments",
                      text: "Appointments POS",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-34.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/invoices",
                      text: "Invoices",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-24.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/online-ordering",
                      text: "Online ordering profiles",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-35.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/online-store",
                      text: "Websites",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-36.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale/restaurants/kiosk-software",
                      text: "Kiosk ordering",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-37.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/bitcoin",
                      text: "Bitcoin",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-38.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Customers",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    {
                      href: "/us/en/marketing",
                      text: "Marketing",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-39.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/messages",
                      text: "Messages",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-40.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/ai",
                      text: "Square AI",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-41.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale/features/dashboard/analytics",
                      text: "Reporting",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-42.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/software/loyalty",
                      text: "Loyalty programs",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-43.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/point-of-sale/features/customer-directory",
                      text: "Customer directory",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-44.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/gift-cards",
                      text: "Gift cards",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-45.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/photo-studio/app",
                      text: "Photo studio",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-46.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/app-marketplace",
                      text: "Marketplace",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-47.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/contracts",
                      text: "Contracts",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-48.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Staff",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    {
                      href: "/us/en/staff/shifts",
                      text: "Shifts",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-49.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/payroll",
                      text: "Payroll",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-50.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/staff/advanced-access",
                      text: "Advanced access",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-51.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/staff/team-communication",
                      text: "Team communication",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-52.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Banking",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    {
                      href: "/us/en/banking",
                      text: "Banking overview",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-53.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/banking/checking",
                      text: "Checking",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-54.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/banking/savings",
                      text: "Savings",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-55.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/banking/loans",
                      text: "Loans",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-56.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/banking/credit-card",
                      text: "Credit card",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-57.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/bitcoin",
                      text: "Bitcoin",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-38.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
            {
              title: "Developers",
              sections: [
                {
                  heading: "Discover",
                  links: [
                    {
                      href: "https://developer.squareup.com/us/en",
                      text: "Developers APIs",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-58.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/app-marketplace",
                      text: "App marketplace",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-59.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/partner-directory",
                      text: "Partner directories",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-29.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/square-specialists",
                      text: "Specialists",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-60.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                    {
                      href: "/us/en/partner-offers",
                      text: "Partner offers",
                      icon: "https://c.animaapp.com/mhxmv8xlsvdxuy/assets/icon-10.svg",
                      iconClassName:
                        "text-base box-border caret-transparent h-[21px] leading-6 w-[21px] md:text-lg md:leading-[27px]",
                    },
                  ],
                },
              ],
            },
          ]}
          footerLinks={[
            {
              href: "/us/en/software",
              text: "All products",
            },
          ]}
        />
      </li>
      <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavItem
          label="Hardware"
          variant=""
          href="/us/en/hardware"
          hasDropdown={false}
        />
      </li>
      <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavItem
          label="Pricing"
          variant=""
          href="/us/en/pricing"
          hasDropdown={false}
        />
      </li>
      <li className="text-base box-border caret-transparent block leading-6 min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        <NavItem
          label="What's new"
          variant="default"
          hasDropdown={true}
          dropdownVariant="grid-rows-[repeat(1,auto)_1fr]"
          categories={[
            {
              title: "Releases",
              sections: [
                {
                  heading: "Editions",
                  links: [
                    { href: "/us/en/releases", text: "Vol. 2, 2025" },
                    {
                      href: "/us/en/releases/spring-2025",
                      text: "Vol. 1, 2025",
                    },
                  ],
                },
              ],
            },
          ]}
          footerLinks={[
            { href: "/us/en/feature-log", text: "Feature log" },
            { href: "/us/en/roadmap", text: "Roadmap" },
          ]}
        />
      </li>
    </ul>
  );
};
