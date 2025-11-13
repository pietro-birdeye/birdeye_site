import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent flex flex-col tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] min-w-80 overflow-x-clip pointer-events-auto text-start indent-[0px] normal-case visible mx-auto border-separate font-square_sans_text_vf md:text-lg md:leading-7">
      <div className="text-base box-border caret-transparent contents leading-6 md:text-lg md:leading-7">
        <Header />
        <Main />
        <Footer />
      </div>
      <iframe
        src="https://a8447815042.cdn-pci.optimizely.com/client_storage/a8447815042.html"
        title="Optimizely Internal Frame"
        className="text-base box-border caret-transparent hidden h-0 leading-6 w-0 md:text-lg md:leading-7"
      ></iframe>
      <div className="text-base box-border caret-transparent isolate leading-6 z-[1000] md:text-lg md:leading-7">
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7"></div>
      </div>
      <div className="text-base box-border caret-transparent isolate leading-6 z-[1000] md:text-lg md:leading-7">
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7"></div>
      </div>
      <div className="text-base box-border caret-transparent isolate leading-6 z-[1000] md:text-lg md:leading-7">
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7"></div>
      </div>
      <div className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:leading-7">
        <iframe title="Intentionally blank"></iframe>
      </div>
      <img
        alt=""
        className="text-base box-border caret-transparent hidden leading-6 max-w-full md:text-lg md:leading-7"
      />
      <div className="fixed text-base box-border caret-transparent h-0 leading-6 w-[76px] z-[2147483647] right-6 bottom-[70px] md:text-lg md:leading-7 md:bottom-6">
        <iframe
          title="Drift Widget Chat Controller"
          className="text-base box-border caret-transparent h-full leading-6 max-w-full w-full bottom-6 md:text-lg md:leading-7"
        ></iframe>
      </div>
      <img
        alt=""
        className="text-base box-border caret-transparent hidden leading-6 max-w-full md:text-lg md:leading-7"
      />
    </body>
  );
};
