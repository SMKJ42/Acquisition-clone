import Image from "next/image";
import { useRef, useState } from "react";
import "flowbite";

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

export function Prev() {
  const harness = useRef(null);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== cards.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === cards.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(cards.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="paginate-jobs-container flex max-w-full">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="flex h-12 text-primary-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        className="flex w-[calc(100%-50px)] flex-nowrap overflow-hidden"
        ref={harness}
      >
        {cards.map((element) => {
          const { text, src, alt } = element;
          return <Card key={alt} text={text} src={src} alt={alt} />;
        })}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="flex h-12 text-primary-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

function Card(props: { text: string[]; src: string; alt: string }) {
  const { text, src, alt } = props;
  return (
    <div className="shrink-0">
      <div className="flex">
        <Image
          src={src}
          alt={alt}
          height={0}
          width={0}
          sizes="90vw"
          className="h-280px w-auto"
        ></Image>
      </div>
      <div>
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export function JobsSlider() {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_are_remote-1.jpg?width=2352&height=1568&name=we_are_remote-1.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="woman virtual meeting"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_work_our_asses_off-1.jpg?width=2352&height=1568&name=we_work_our_asses_off-1.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="woman virtual meeting"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_love_what_we_do-1.jpg?width=2352&height=1568&name=we_love_what_we_do-1.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="woman virtual meeting"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/we_keep_it_real-1.jpg?width=2352&height=1568&name=we_keep_it_real-1.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="woman virtual meeting"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg?width=2352&height=1568&name=ACQ_Website_LifeAtAcquisition-NeverSkipDessert2.jpg"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="woman virtual meeting"
          />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-primary-200"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-primary-200"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-primary-200"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-primary-200"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-primary-200"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="flex h-12 text-primary-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="flex h-12 text-primary-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

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
  );
}
