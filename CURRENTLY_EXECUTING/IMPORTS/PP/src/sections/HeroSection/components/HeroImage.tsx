export const HeroImage = () => {
  return (
    <div className="box-border caret-transparent col-end-[-3] col-start-3 z-[1]">
      <div className="relative items-center box-border caret-transparent flex h-full justify-center w-full">
        <div className="relative aspect-[3_/_4] box-border caret-transparent min-w-full md:aspect-video">
          <picture className="box-border caret-transparent block h-full leading-[0px]">
            <img
              alt="Person holding mobile phone showing checkout screen with payment options including debit/credit card, PayPal, Pay Later, Venmo, and Apple Pay."
              src="https://c.animaapp.com/mhxm0rhi2H5w0y/assets/35.jpg"
              className="box-border caret-transparent h-full max-w-full object-cover w-full"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
