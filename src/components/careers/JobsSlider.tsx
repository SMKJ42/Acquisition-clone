import Image from "next/image";
import { useRef, useState } from "react";
// import "flowbite";
import { Carousel } from "flowbite-react";

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

// <div
//   id="default-carousel"
//   className="relative w-full"
//   data-carousel="slide"
// >
//   <div className="relativeoverflow-hidden rounded-lg sm:h-[400px]">
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="flex h-full w-full">
//         <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
//           WE ARE <span className="text-primary-200">&nbsp;REMOTE. </span>
//         </h3>
//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_are_remote-1.jpg?width=2352&height=1568&name=we_are_remote-1.jpg"
//             className="absolute left-1/2 top-1/2 block w-1/2"
//             alt="woman virtual meeting"
//             fill={true}
//           />
//         </div>
//         <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold sm:text-4xl md:hidden md:text-5xl">
//           WE ARE <span className="text-primary-200">&nbsp;REMOTE. </span>
//         </h3>
//       </div>
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="flex h-full w-full">
//         <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
//           WE WORK OUR
//           <span className="text-primary-200">&nbsp;ASSES OFF.</span>
//         </h3>
//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_work_our_asses_off-1.jpg?width=2352&height=1568&name=we_work_our_asses_off-1.jpg"
//             className="absolute left-1/2 top-1/2 block w-1/2"
//             alt="woman virtual meeting"
//             fill={true}
//           />
//         </div>
//         <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold text-white sm:text-4xl md:hidden md:text-5xl">
//           WE WORK OUR
//           <span className="">&nbsp;ASSES OFF.</span>
//         </h3>
//       </div>
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="flex h-full w-full">
//         <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
//           <div>
//             WE<span className="text-primary-200">&nbsp;LOVE &nbsp;</span>
//           </div>
//           <div>
//             WHAT WE
//             <span className="text-primary-200">&nbsp;DO.&nbsp; </span>
//           </div>
//         </h3>

//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_love_what_we_do-1.jpg?width=2352&height=1568&name=we_love_what_we_do-1.jpg"
//             className="absolute left-1/2 top-1/2 block w-1/2"
//             alt="woman virtual meeting"
//             fill={true}
//           />
//         </div>
//         <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold text-white sm:text-4xl md:hidden md:text-5xl">
//           <div>
//             WE<span className="text-primary-200">&nbsp;LOVE &nbsp;</span>
//           </div>
//           <div>
//             WHAT WE
//             <span className="text-primary-200">&nbsp;DO.&nbsp; </span>
//           </div>
//         </h3>
//       </div>
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="flex h-full w-full">
//         <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
//           WE KEEP IT<span className="text-primary-200">&nbsp;REAL .</span>
//         </h3>

//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_keep_it_real-1.jpg?width=2352&height=1568&name=we_keep_it_real-1.jpg"
//             className="absolute left-1/2 top-1/2 block w-1/2"
//             alt="woman virtual meeting"
//             fill={true}
//           />
//         </div>
//         <h3 className="absolute mx-8 mt-8 flex w-full flex-col items-center justify-center text-3xl font-extrabold sm:text-4xl md:hidden md:text-5xl">
//           WE KEEP IT<span className="text-primary-200">&nbsp;REAL.</span>
//         </h3>
//       </div>
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <div className="flex h-full w-full">
//         <h3 className="mx-8 hidden w-1/2 flex-col items-center justify-center text-4xl font-extrabold md:flex">
//           <div>
//             WE<span className="text-primary-200">&nbsp;NEVER&nbsp;</span>
//           </div>
//           SKIP DESSERT.
//         </h3>

//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg?width=2352&height=1568&name=ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg"
//             className="absolute left-1/2 top-1/2 block w-1/2"
//             alt="woman virtual meeting"
//             fill={true}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full bg-primary-200"
//       aria-current="true"
//       aria-label="Slide 1"
//       data-carousel-slide-to="0"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full bg-primary-200"
//       aria-current="false"
//       aria-label="Slide 2"
//       data-carousel-slide-to="1"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full bg-primary-200"
//       aria-current="false"
//       aria-label="Slide 3"
//       data-carousel-slide-to="2"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full bg-primary-200"
//       aria-current="false"
//       aria-label="Slide 4"
//       data-carousel-slide-to="3"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full bg-primary-200"
//       aria-current="false"
//       aria-label="Slide 5"
//       data-carousel-slide-to="4"
//     ></button>
//   </div>
//   <button
//     type="button"
//     className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//     data-carousel-prev
//   >
//     <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2.5}
//         stroke="currentColor"
//         className="flex h-12 text-primary-200"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5"
//         />
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//     data-carousel-next
//   >
//     <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2.5}
//         stroke="currentColor"
//         className="flex h-12 text-primary-200"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5"
//         />
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//   </button>
// </div>

/////****************************** */

// <div
//   id="default-carousel"
//   className="relative w-full"
//   data-carousel="slide"
// >
//   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-1.svg"
//         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//         alt="..."
//       />
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-2.svg"
//         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//         alt="..."
//       />
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-3.svg"
//         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//         alt="..."
//       />
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-4.svg"
//         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//         alt="..."
//       />
//     </div>
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-5.svg"
//         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//         alt="..."
//       />
//     </div>
//   </div>
//   <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full"
//       aria-current="true"
//       aria-label="Slide 1"
//       data-carousel-slide-to="0"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 2"
//       data-carousel-slide-to="1"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 3"
//       data-carousel-slide-to="2"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 4"
//       data-carousel-slide-to="3"
//     ></button>
//     <button
//       type="button"
//       className="h-3 w-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 5"
//       data-carousel-slide-to="4"
//     ></button>
//   </div>
//   <button
//     type="button"
//     className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//     data-carousel-prev
//   >
//     <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//       <svg
//         className="h-4 w-4 text-white dark:text-gray-800"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M5 1 1 5l4 4"
//         />
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//     data-carousel-next
//   >
//     <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//       <svg
//         className="h-4 w-4 text-white dark:text-gray-800"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="m1 9 4-4-4-4"
//         />
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//   </button>
// </div>
// }
