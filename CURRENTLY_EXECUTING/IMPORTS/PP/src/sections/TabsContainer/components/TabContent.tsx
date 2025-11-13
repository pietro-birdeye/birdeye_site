import { FeaturesSection } from "@/sections/FeaturesSection";

export const TabContent = () => {
  return (
    <div role="tabpanel" className="box-border caret-transparent">
      <FeaturesSection
        variant="simple"
        tagline="Simplify setup. Simplify compliance. Get back to your business."
      />
      <FeaturesSection
        variant=""
        features={[
          {
            title: "Accept PayPal payments and major cards",
            description: "",
            videoSrc:
              "https://www.paypalobjects.com/marketing/web23/US/merchant/online-checkout/video/paypal-checkout/desktop-ppxo-1.mp4",
            videoPoster: "https://c.animaapp.com/mhxm0rhi2H5w0y/assets/29.png",
            videoAriaLabel:
              "Video highlighting how PayPal Checkout can include buttons for various payment options including PayPal, Pay Later, Venmo, and credit card.",
          },
          {
            title: "Simple customization",
            description:
              "Less coding for fast and simple setup. Customize the color and shape of our payment buttons to fit your brand.",
            videoSrc:
              "https://www.paypalobjects.com/marketing/web23/US/merchant/online-checkout/video/paypal-checkout/desktop-ppxo-2.mp4",
            videoPoster: "https://c.animaapp.com/mhxm0rhi2H5w0y/assets/30.png",
            videoAriaLabel:
              "Video highlighting how PayPal Checkout allows simple customization of payment button shapes and colors.",
          },
          {
            title: "Built-in risk management",
            description: "",
            videoSrc:
              "https://www.paypalobjects.com/marketing/web23/US/merchant/online-checkout/video/paypal-checkout/desktop-ppxo-3.mp4",
            videoPoster: "https://c.animaapp.com/mhxm0rhi2H5w0y/assets/31.png",
            videoAriaLabel:
              "Video highlighting the fact that Seller Protection is automatically included with PayPal Checkout, even with card processing.",
          },
        ]}
      />
    </div>
  );
};
