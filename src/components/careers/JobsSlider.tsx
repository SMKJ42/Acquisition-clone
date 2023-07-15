import Image from "next/image";
// import "flowbite";
import { Carousel } from "flowbite-react";

//TODO: turn this into a reusable component

const cards = [
  {
    text: ["WE ARE", "REMOTE."],
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_are_remote-1.jpg?width=2352&height=1568&name=we_are_remote-1.jpg",
    alt: "woman virtual meeting",
  },
  {
    text: ["WE WORK OUR", "ASSES OFF."],
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_work_our_asses_off-1.jpg?width=2352&height=1568&name=we_work_our_asses_off-1.jpg",
    alt: "woman virtual meeting",
  },
  {
    text: ["WE", "LOVE", "WHAT WE", "DO."],
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_love_what_we_do-1.jpg?width=2352&height=1568&name=we_love_what_we_do-1.jpg",
    alt: "woman virtual meeting",
  },
  {
    text: ["WE KEEP IT", "REAL."],
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_keep_it_real-1.jpg?width=2352&height=1568&name=we_keep_it_real-1.jpg",
    alt: "woman virtual meeting",
  },
  {
    text: ["WE", "NEVER", "SKIP DESSERT."],
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg?width=2352&height=1568&name=ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg",
    alt: "woman virtual meeting",
  },
];

export default function DefaultCarousel() {
  return (
    <Carousel>
      <div className="flex h-full w-full">
        <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
          WE ARE <span className="text-primary-200">&nbsp;REMOTE. </span>
        </h3>
        <div className="relative w-full md:w-1/2">
          <Image
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_are_remote-1.jpg?width=2352&height=1568&name=we_are_remote-1.jpg"
            className="absolute left-1/2 top-1/2 block w-1/2"
            alt="woman virtual meeting"
            fill={true}
          />
        </div>
        <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold sm:text-4xl md:hidden md:text-5xl">
          WE ARE <span className="text-primary-200">&nbsp;REMOTE. </span>
        </h3>
      </div>
      <div className="flex h-full w-full">
        <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
          WE WORK OUR
          <span className="text-primary-200">&nbsp;ASSES OFF.</span>
        </h3>
        <div className="relative w-full md:w-1/2">
          <Image
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_work_our_asses_off-1.jpg?width=2352&height=1568&name=we_work_our_asses_off-1.jpg"
            className="absolute left-1/2 top-1/2 block w-1/2"
            alt="woman virtual meeting"
            fill={true}
          />
        </div>
        <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold text-white sm:text-4xl md:hidden md:text-5xl">
          WE WORK OUR
          <span className="">&nbsp;ASSES OFF.</span>
        </h3>
      </div>
      <div className="flex h-full w-full">
        <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
          <div>
            WE<span className="text-primary-200">&nbsp;LOVE &nbsp;</span>
          </div>
          <div>
            WHAT WE
            <span className="text-primary-200">&nbsp;DO.&nbsp; </span>
          </div>
        </h3>

        <div className="relative w-full md:w-1/2">
          <Image
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_love_what_we_do-1.jpg?width=2352&height=1568&name=we_love_what_we_do-1.jpg"
            className="absolute left-1/2 top-1/2 block w-1/2"
            alt="woman virtual meeting"
            fill={true}
          />
        </div>
        <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold text-white sm:text-4xl md:hidden md:text-5xl">
          <div>
            WE<span className="text-primary-200">&nbsp;LOVE &nbsp;</span>
          </div>
          <div>
            WHAT WE
            <span className="text-primary-200">&nbsp;DO.&nbsp; </span>
          </div>
        </h3>
      </div>
      <div className="flex h-full w-full">
        <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
          WE KEEP IT<span className="text-primary-200">&nbsp;REAL .</span>
        </h3>

        <div className="relative w-full md:w-1/2">
          <Image
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_keep_it_real-1.jpg?width=2352&height=1568&name=we_keep_it_real-1.jpg"
            className="absolute left-1/2 top-1/2 block w-1/2"
            alt="woman virtual meeting"
            fill={true}
          />
        </div>
        <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold sm:text-4xl md:hidden md:text-5xl">
          WE KEEP IT<span className="text-primary-200">&nbsp;REAL.</span>
        </h3>
      </div>
      <div className="flex h-full w-full">
        <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
          <div>
            WE<span className="text-primary-200">&nbsp;NEVER&nbsp;</span>
          </div>
          SKIP DESSERT.
        </h3>

        <div className="relative w-full md:w-1/2">
          <Image
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg?width=2352&height=1568&name=ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg"
            className="absolute left-1/2 top-1/2 block w-1/2"
            alt="woman virtual meeting"
            fill={true}
          />
        </div>
      </div>
    </Carousel>
  );
}
