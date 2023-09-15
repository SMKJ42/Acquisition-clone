import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const VideoThumbnails = () => {
  const router = useRouter();

  return (
    <div className="mb-8 grid w-full grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/start_here.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/start_here")}
          />
        </div>
        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/start_here">Start Here</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/picking_markets.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/picking_markets")}
          />
        </div>
        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/picking_markets">Picking Markets</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/charge_its_worth.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/charge_its_worth")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/charge_its_worth">Charge It&apos;s Worth</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/the_value_equation.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/the_value_equation")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/the_value_equation">The Value Equation</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/offer_creation1.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/offer_creation1")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/offer_creation1">Offer Creation Pt 1</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/offer_creation2.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/offer_creation2")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/offer_creation2">Offer Creation Pt 2</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/bonuses.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/bonuses")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/bonuses">Bonuses</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/scarcity_and_urgency.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/scarcity_and_urgency")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/scarcity_and_urgency">Scarcity & Urgency</Link>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col items-center">
        <div className="p-6">
          <Image
            src="/images/thumbnails/naming_products.png"
            alt="Start Here"
            height={400}
            width={400}
            className=""
            onClick={() => void router.push("/courses/naming_products")}
          />
        </div>

        <div className="text-large text-bold rounded-xl bg-primary-200 px-4 py-4 text-white">
          <Link href="/courses/naming_products">Naming Products</Link>
        </div>
      </div>
    </div>
  );
};
