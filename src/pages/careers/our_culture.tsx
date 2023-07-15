import { type ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { GreatPlaceToWork } from "~/components/shared/GreatPlaceToWork";
import JobsSlider from "~/components/careers/JobsSlider";
import ValuesCards from "~/components/careers/ValuesCards";
import EmployeeTestimonials from "~/components/careers/EmployeeTestimonials";

const OurCulture: NextPageWithLayout = () => {
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
      <ValuesCards />
      <GreatPlaceToWork />
      <div className="flex w-full bg-white py-16 text-center text-4xl font-extrabold">
        <h3 className="w-full">
          ARE YOU A&nbsp;
          <span className="text-primary-200"> PERFECT FIT</span>?
        </h3>
      </div>
      <div className="jobs-slider h-72 bg-white pb-16">
        <JobsSlider />
      </div>
      <EmployeeTestimonials />
    </div>
  );
};

OurCulture.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default OurCulture;
