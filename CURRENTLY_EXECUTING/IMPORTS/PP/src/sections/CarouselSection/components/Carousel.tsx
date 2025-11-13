import { CarouselSlide } from "@/sections/CarouselSection/components/CarouselSlide";
import { CarouselDots } from "@/sections/CarouselSection/components/CarouselDots";

export const Carousel = () => {
  return (
    <div
      aria-label="Card Carousel"
      role="region"
      className="relative box-border caret-transparent max-w-full mt-8 mb-12"
    >
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent">
          <div
            role="presentation"
            className="relative box-border caret-transparent flex list-none min-w-full w-max"
          >
            <CarouselSlide
              slideNumber={1}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/guest-checkout"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/46.jpg"
              imageAlt="Person holding a phone with overlay showing guest checkout code and Fastlane by PayPal logo"
              title="Guest checkout"
            />
            <CarouselSlide
              slideNumber={2}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/recurring-payments"
              containerClassName="ml-4 md:ml-[22.8496px]"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/42.jpg"
              imageAlt="Person holding a package of skincare products with overlay showing a subscription plan for $32 due next Monday"
              title="Recurring payments"
            />
            <CarouselSlide
              slideNumber={3}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/installment-payments"
              containerClassName="ml-4 md:ml-[22.8496px]"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/47.jpg"
              imageAlt="Pay Later Pay in 4 checkout screen over the image of a white chair"
              title="Installment payments"
            />
            <CarouselSlide
              slideNumber={4}
              totalSlides={9}
              href="https://www.paypal.com/us/enterprise/payment-processing/accept-paypal"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
            <CarouselSlide
              slideNumber={5}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/payment-links"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
            <CarouselSlide
              slideNumber={6}
              totalSlides={9}
              href="https://www.paypal.com/us/business/pos-system"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
            <CarouselSlide
              slideNumber={7}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/invoice"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
            <CarouselSlide
              slideNumber={8}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/virtual-terminal"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
            <CarouselSlide
              slideNumber={9}
              totalSlides={9}
              href="https://www.paypal.com/us/business/accept-payments/accept-venmo"
              containerClassName="ml-4 md:ml-[22.8496px]"
            />
          </div>
          <CarouselDots />
        </div>
      </div>
    </div>
  );
};
