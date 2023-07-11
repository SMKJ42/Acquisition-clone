import Image from "next/image";

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
  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-primary-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      {cards.map((element) => {
        const { text, src, alt } = element;
        return <Card key="alt" text={text} src={src} alt={alt} />;
      })}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-primary-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

function Card(props: { text: string[]; src: string; alt: string }) {
  const { text, src, alt } = props;
  return (
    <div className="">
      <div>
        <h3>{text}</h3>
      </div>
      <div className="flex">
        <Image
          src={src}
          alt={alt}
          height={0}
          width={0}
          sizes="50vw"
          style={{ width: "50vw", height: "auto" }}
        ></Image>
      </div>
    </div>
  );
}
