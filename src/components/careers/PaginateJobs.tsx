import Image from "next/image";
import { useRef } from "react";

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

export function PaginateJobs() {
  const harness = useRef(null);

  return (
    <div className="paginate-jobs-container flex">
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
      <div className="flex flex-nowrap" ref={harness}>
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
