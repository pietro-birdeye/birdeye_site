export const ArticleDots = () => {
  return (
    <div className="absolute items-center box-border caret-transparent flex flex-wrap justify-center translate-x-[-50.0%] w-[90%] my-8 left-2/4">
      <button
        aria-label="Go to page 1 of 3"
        type="button"
        className="relative items-center bg-transparent caret-transparent flex h-2 justify-center text-center w-8 overflow-hidden mx-[5px] p-0 rounded-bl rounded-br rounded-tl rounded-tr md:h-3 md:w-12 md:rounded-xl"
      >
        <span className="bg-black box-border caret-transparent block h-full w-full"></span>
      </button>
      <button
        aria-label="Go to page 2 of 3"
        type="button"
        className="relative items-center bg-transparent caret-transparent flex h-2 justify-center text-center w-2 overflow-hidden mx-[5px] p-0 rounded-bl rounded-br rounded-tl rounded-tr md:h-3 md:w-3 md:rounded-xl"
      >
        <span className="bg-black box-border caret-transparent block h-full opacity-35 w-full"></span>
      </button>
      <button
        aria-label="Go to page 3 of 3"
        type="button"
        className="relative items-center bg-transparent caret-transparent flex h-2 justify-center text-center w-2 overflow-hidden mx-[5px] p-0 rounded-bl rounded-br rounded-tl rounded-tr md:h-3 md:w-3 md:rounded-xl"
      >
        <span className="bg-black box-border caret-transparent block h-full opacity-35 w-full"></span>
      </button>
    </div>
  );
};
