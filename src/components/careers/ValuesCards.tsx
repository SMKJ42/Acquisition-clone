import { useState } from "react";

export default function ValuesCards() {
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  return (
    <div className="">
      <div className="flex w-full flex-col py-12 text-center">
        <h3 className="text-4xl font-extrabold">
          VALUES <span className="text-primary-200">MATTER.</span>
        </h3>
        <p>Select each card below to reveal more information.</p>
      </div>
      <div className="grid grid-flow-row grid-cols-1 text-center lg:grid-cols-2 lg:grid-rows-grow-cards">
        <div className="relative overflow-visible p-4 hover:h-[282px] hover:p-0">
          <div
            className="flex h-full min-h-[250px] w-full items-center justify-center px-8 py-8 font-bold text-primary-200 shadow-2xl "
            onMouseEnter={() => {
              setHoverItem("unimpeachable");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "unimpeachable" ? (
              <span className="text-3xl sm:text-4xl md:text-5xl">
                UNIMPEACHABLE <br />
                CHARACTER
              </span>
            ) : (
              <span className="text-xl">
                BE THE TYPE OF PERSON WITH WHOM PEOPLE ARE ALWAYS PROUD TO
                ASSOCIATE, PERSONALLY AND PROFESSIONALLY
              </span>
            )}
          </div>
        </div>
        <div className="h-full  overflow-visible p-4 hover:h-[282px] hover:p-0 lg:row-span-2 lg:hover:h-[564px]">
          <div
            className="flex h-full min-h-[250px] w-full items-center justify-center bg-primary-100 px-8 py-8 font-bold text-white shadow-2xl "
            onMouseEnter={() => {
              setHoverItem("competitive");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "competitive" ? (
              <span className="text-3xl sm:text-4xl md:text-5xl">
                COMPETITVE <br />
                GREATNESS
              </span>
            ) : (
              <span className="text-xl">
                NOTHING GREAT CAN BE BUILT WITHOUT FEEDBACK; INTERNALLY OR
                EXTERNALLY
              </span>
            )}
          </div>
        </div>
        <div className="overflow-visible p-4 hover:h-[282px] hover:p-0 ">
          <div
            className="flex h-full min-h-[250px] w-full items-center justify-center bg-primary-300 px-8 py-8 font-bold shadow-2xl"
            onMouseEnter={() => {
              setHoverItem("sincere");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "sincere" ? (
              <span className="text-3xl sm:text-4xl md:text-5xl">
                SINCERE <br />
                CANDOR
              </span>
            ) : (
              <span className="text-xl">
                BE AT YOUR BEST WHEN YOUR BEST IS NEEDED. YOU ENJOY A HARD
                CHALLEN
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
