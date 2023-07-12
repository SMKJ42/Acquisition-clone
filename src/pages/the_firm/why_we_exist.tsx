import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";
import { CallToAction } from "~/components/shared/CallToAction";

const WhyWeExist: NextPageWithLayout = () => {
  return (
    <div className="bg-texture">
      <div className="flex flex-col items-center bg-white pb-8 text-center">
        <h2 className="pt-8 text-2xl font-bold">WHY WE EXIST</h2>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Home-Icon-WhyWeExist.svg"
                alt="Why we exist icon"
                width={150}
                height={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                TO MAKE REAL BUSINESS EDUCATION AVAILABLE TO EVERYONE
              </h3>
              <p className="w-2/3">
                Most entrepreneurs lack the WHO, the WHAT, and the HOW to SCALE.
                At acquisition.com we recruit the who, give them the what, and
                show them the how. And once an entrepreneur has all three, their
                business scales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-8 text-center">
        <h2 className="pt-8 text-2xl font-bold">OUR NON-NEGOTIABLE VALUES</h2>
        <div className="flex justify-center py-6">
          <div className="h-[5px] w-[80px] bg-primary-200"></div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-CompetitveGreatness.svg"
                alt="revenue icon"
                width={150}
                height={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">COMPETITIVE GREATNESS</h3>
            </div>
            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-SincereCandor.svg"
                alt="revenue icon"
                width={150}
                height={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">SINCERE CANDOR</h3>
            </div>

            <div className="icon mb-4 flex flex-col items-center">
              <Image
                src="https://www.acquisition.com/hubfs/Acquisition_September2022/ACQ_Web_Icon-UnimpeachableCharacter.svg"
                alt="revenue icon"
                width={150}
                height={150}
                loading="lazy"
              />
              <h3 className="w-2/3 text-lg font-bold">
                UNIMPEACHABLE CHARACTER
              </h3>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

WhyWeExist.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default WhyWeExist;
