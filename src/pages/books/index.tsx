import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";
import { useRouter } from "next/router";

interface Book {
  name: string;
  image: string;
  alt: string;
  courseLink: string | null;
  storeLink: string | null;
  bestSeller: boolean;
}

const books = [
  {
    name: "100 Million Dollar Offers",
    image:
      "https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_FreeAdvancedTraining-OfferCreationCourse-1.png",
    alt: "100 Million Dollar Offers by Alex Hormozi",
    courseLink: "https://www.acquisition.com/100-million-dollar-offers",
    storeLink: "https://www.acquisition.com/100-million-dollar-offers",
    bestSeller: true,
  },
  {
    name: "100 Million Dollar Leads",
    image:
      "https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_FreeAdvancedTraining-ComingSoon%201.png",
    alt: "100 Million Dollar Leads by Alex Hormozi",
    courseLink: null,
    storeLink: null,
    bestSeller: false,
  },
];
const Books: NextPageWithLayout = () => {
  return (
    <div className="flex w-full flex-col items-center py-8">
      <div>
        <h1 className="trucate mx-8 mb-4 flex flex-col text-center text-3xl font-extrabold">
          WANT TO LEVEL UP?&nbsp;
          <span className="text-primary-200">READ THESE BOOKS.</span>
        </h1>
        <p className="mb-8 text-center text-lg font-light italic">
          Ebooks only $1.99
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 px-8 sm:grid-cols-2">
        {books.map((book) => {
          const { name, image, alt, courseLink, storeLink, bestSeller } = book;
          return (
            <BookComponent
              key={name}
              name={name}
              image={image}
              alt={alt}
              courseLink={courseLink}
              storeLink={storeLink}
              bestSeller={bestSeller}
            />
          );
        })}
      </div>
    </div>
  );
};

function BookComponent(props: Book) {
  const router = useRouter();
  const { name, image, alt, courseLink, storeLink, bestSeller } = props;

  return (
    <div className="flex flex-col items-center">
      {bestSeller ? (
        <p className="w-3/4 rounded-t-lg bg-primary-200 text-center text-white">
          BEST SELLER
        </p>
      ) : (
        <div className="h-6"></div>
      )}
      <div className="flex h-full flex-col items-center justify-around rounded-md bg-white text-center shadow-2xl">
        <h3 className="px-8 pt-4 text-lg font-bold">{name}</h3>
        <Image src={image} alt={alt} width={250} height={250} />
        {courseLink && (
          <span className="text-lg">
            Find the <span className="font-bold italic">free</span> course&nbsp;
            <button
              onClick={() => {
                void router.push(courseLink);
              }}
              className="text-primary-200 underline hover:text-primary-300"
            >
              here
            </button>
          </span>
        )}
        {storeLink ? (
          <button
            onClick={() => {
              window.open(
                "https://www.amazon.com/100M-Offers-People-Stupid-Saying/dp/1737475715/ref=sr_1_2?cri[%E2%80%A6]FzcCI6IjEuOTUifQ%3D%3D&sprefix=100m+offers%2Caps%2C137&sr=8-2",
                "_blank"
              );
            }}
            className="mb-6 mt-4 rounded-2xl bg-primary-200 px-8 py-4 text-white hover:bg-primary-300"
          >
            Purchase
          </button>
        ) : (
          <div className="mb-6 mt-4 py-4">&nbsp;</div>
        )}
      </div>
    </div>
  );
}

Books.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Books;
