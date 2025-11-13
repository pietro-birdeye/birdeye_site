export const HeroVideo = () => {
  return (
    <section className="relative text-base box-border caret-transparent h-full leading-6 w-full overflow-hidden md:text-lg md:leading-7">
      <div className="[mask-image:radial-gradient(circle,rgb(0,0,0),rgba(0,0,0,0)_100%)] text-base box-border caret-transparent h-full leading-6 [mask-size:1000%_1000%] overflow-hidden [mask-position:50%] md:text-lg md:leading-7">
        <video
          playsinline=""
          autoplay=""
          muted=""
          poster="https://c.animaapp.com/mhxmv8xlsvdxuy/assets/105.webp"
          preload="auto"
          loop=""
          className="text-base box-border caret-transparent h-full leading-6 object-cover w-full md:text-lg md:leading-7"
        >
          <source
            src="https://pw-assets-production-c.squarecdn.com/video/5mObdhW0r5D0lyp3iVJFA6/b4d81931-7cfa-4402-bb41-efc4126e3f95-en-ee526a6b-3ca3-4ae5-9bc2-be60cb21229f-en-Homepage_Edit-updated.webm"
            type="video/webm"
            className="text-base box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
          />
          <source
            src="https://pw-assets-production-c.squarecdn.com/video/UzwkmwVqtJ5eHtTOhEj6Q/f35f845e-122e-41c4-8c1e-ee7763cab6c4-en-ee526a6b-3ca3-4ae5-9bc2-be60cb21229f-en-Homepage_Edit-updated.mp4"
            type="video/mp4"
            className="text-base box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
          />
        </video>
      </div>
      <div className="absolute text-base bg-black/30 box-border caret-transparent h-full leading-6 pointer-events-none w-full top-0 md:text-lg md:leading-7"></div>
      <div className="absolute text-base bg-[url('https://pw-renderer-production-c.squarecdn.com/d0dd4f324d9cf5c1f335ddd91bb33290961e42c4/_svelte/noise.svg')] bg-size-[80px] box-border caret-transparent h-full leading-6 mix-blend-overlay opacity-50 pointer-events-none w-full top-0 md:text-lg md:leading-7"></div>
    </section>
  );
};
