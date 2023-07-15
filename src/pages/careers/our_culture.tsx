import { type ReactElement, useState } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { GreatPlaceToWork } from "~/components/shared/GreatPlaceToWork";
import JobsSlider from "~/components/careers/JobsSlider";

const OurCulture: NextPageWithLayout = () => {
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  return (
    <div className="bg-texture">
      <div className=" z-10 w-full bg-primary-100 text-center">
        <h1 className=" z-10 px-4 pb-16 pt-12 text-3xl font-extrabold text-white sm:px-16 sm:text-5xl md:text-7xl">
          LIFE AT <br />
          <span className="text-primary-200">AQUISITION.COM</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="row-start-2 flex flex-col items-center  justify-center bg-white py-8 text-center lg:row-start-1">
          <h2 className="px-8 pb-6 text-3xl font-extrabold sm:text-5xl">
            ONLY THE&nbsp;
            <span className="text-primary-200 ">VERY BEST</span>
            &nbsp;NEED APPLY.
          </h2>
          <button className="w-fit rounded-2xl bg-primary-200 px-12 py-2 text-2xl font-thin text-white hover:bg-primary-300">
            Join Us
          </button>
        </div>
        <div
          className="z-20
          h-[350px] overflow-y-scroll bg-gray-200 bg-alex-laila-parallax bg-contain bg-fixed bg-center bg-no-repeat pl-[50%] lg:bg-[90%]"
        ></div>
      </div>
      <div className="">
        <div className="flex w-full flex-col py-12 text-center">
          <h3 className="text-4xl font-extrabold">
            VALUES <span className="text-primary-200">MATTER.</span>
          </h3>
          <p>Select each card below to reveal more information.</p>
        </div>
        <div className="mx-8 mb-12 grid gap-8 text-center lg:grid-cols-2">
          <div
            className="flex w-full items-center justify-center px-16 py-24 font-bold text-primary-200 shadow-2xl"
            onMouseEnter={() => {
              setHoverItem("unimpeachable");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "unimpeachable" ? (
              <span className="text-5xl">
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
          <div
            className=" flex h-[300px] w-full items-center justify-center bg-primary-100 px-16 py-24 font-bold text-white lg:row-span-2"
            onMouseEnter={() => {
              setHoverItem("competitive");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "competitive" ? (
              <span className="text-5xl">
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
          <div
            className="flex w-full items-center justify-center bg-primary-300 px-16 py-24 font-bold"
            onMouseEnter={() => {
              setHoverItem("sincere");
            }}
            onMouseLeave={() => {
              setHoverItem(null);
            }}
          >
            {hoverItem !== "sincere" ? (
              <span className="text-5xl">
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
      <GreatPlaceToWork />
      <div className="flex w-full py-16 text-center text-4xl font-extrabold">
        <h3 className="w-full">
          ARE YOU A&nbsp;
          <span className="text-primary-200"> PERFECT FIT</span>?
        </h3>
      </div>
      <div className="jobs-slider h-72">
        <JobsSlider />
      </div>
    </div>
  );
};

OurCulture.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default OurCulture;
