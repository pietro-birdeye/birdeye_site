import { ArticleCard } from "@/sections/ArticlesSection/components/ArticleCard";
import { ArticleDots } from "@/sections/ArticlesSection/components/ArticleDots";

export const ArticlesCarousel = () => {
  return (
    <div
      aria-label="Card Carousel"
      role="region"
      className="relative box-border caret-transparent max-w-full"
    >
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent">
          <div
            role="presentation"
            className="relative box-border caret-transparent flex list-none min-w-full w-max"
          >
            <ArticleCard
              ariaLabel="Slide 1 of 5"
              href="https://www.paypal.com/us/brc/article/supercharge-conversions-with-ultimate-checkout-stack"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/44.jpg"
              imageAlt="Two people in a warehouse packing a box and looking at a laptop."
              category1="Small Business"
              category2="Payments"
              title="How to supercharge conversion: Optimize your checkout"
              author="PayPal Editorial Staff"
              date="December 16"
              contentType="Article"
              hasImage={true}
            />
            <ArticleCard
              ariaLabel="Slide 2 of 5"
              href="https://www.paypal.com/us/brc/article/boost-sales-with-streamlined-guest-checkout"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/45.jpg"
              imageAlt="Person scanning item for customer on POS system."
              category1="Enterprise"
              category2="Payments"
              title="Less friction, more sales"
              author="PayPal Editorial Staff"
              date="January 17"
              contentType="Article"
              hasImage={true}
              containerVariant="ml-4 md:ml-[22.8496px]"
            />
            <ArticleCard
              ariaLabel="Slide 3 of 5"
              href="https://www.paypal.com/us/brc/article/long-term-customer-value-with-flexible-payment-options"
              imageUrl="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/48.jpg"
              imageAlt="Person looking at mobile phone."
              category1="Enterprise"
              category2="Payments"
              title="Maximizing customer value and revenue growth with flexible payment options"
              author="PayPal Editorial Staff"
              date="September 23"
              contentType="Article"
              hasImage={true}
              containerVariant="ml-4 md:ml-[22.8496px]"
            />
            <ArticleCard
              ariaLabel="Slide 4 of 5"
              href="https://www.paypal.com/us/brc/article/diverse-payment-option-impact-on-cart-abandonment"
              category1="Enterprise"
              category2="Payments"
              title="Influence of diverse payment options on reducing cart abandonment"
              author="PayPal Editorial Staff"
              date="September 16"
              contentType="Article"
            />
            <ArticleCard
              ariaLabel="Slide 5 of 5"
              href="https://www.paypal.com/us/brc/article/accept-digital-wallets"
              category1="Small Business"
              category2="Payments"
              title="How to accept digital wallet payments"
              author="PayPal Editorial Staff"
              date="May 14"
              contentType="Article"
            />
          </div>
          <ArticleDots />
        </div>
      </div>
    </div>
  );
};
