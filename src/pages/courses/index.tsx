import { type ReactElement, useEffect } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";
import { VideoThumbnails } from "~/components/courses/VideoThumbnails";
import { EmailButton } from "~/components/courses/EmailButton";

const Courses: NextPageWithLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/embed/medias/oatdpbzynr.jsonp";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center md:col-span-9">
          <h1 className="text-center text-4xl font-bold">START HERE </h1>
          <div className="my-6 h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div className="col-span-12 mb-8 w-full md:col-span-9 md:px-8">
          {/* <div className="wistia_responsive_wrapper left-0 top-0 h-full w-full"> */}
          <div className="wistia_embed wistia_async_oatdpbzynr videoFoam=true  h-full w-full ">
            {/* Video sits in here */}
          </div>
          {/* </div> */}
        </div>
        <div className="align-center col-span-12 row-end-4 mr-2 flex h-full items-center md:col-span-3 md:col-start-10 md:row-start-1">
          <div className="col-span-2 flex h-fit w-full flex-col items-center bg-gray-200">
            <h3 className="pt-4 text-lg font-bold">Vol. II is coming...</h3>
            <Image
              src="https://www.acquisition.com/hs-fs/hubfs/100M%20Offer-1.png?width=400&height=462&name=100M%20Offer-1.png"
              alt="$100M Leads"
              height={300}
              width={240}
              className="p-4 md:h-auto md:w-full"
            />
            <div className="flex flex-col items-center px-4 text-center text-lg font-light">
              <p>Want to know when its availiable?</p>
              <EmailButton />
            </div>
          </div>
        </div>
      </div>
      <VideoThumbnails />
    </div>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Courses;
