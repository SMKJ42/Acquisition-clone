import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";
import { GreatPlaceToWork } from "~/components/shared/GreatPlaceToWork";
import { PaginateJobs } from "~/components/careers/PaginateJobs";

const OurCulture: NextPageWithLayout = () => {
  return (
    <div>
      <div>
        <h1>LIFE AT AQUISITION.COM</h1>
      </div>
      <div>
        <div>
          <h2>ONLY THE VERY BEST NEED APPLY.</h2>
          <button>Join Us</button>
        </div>
        <Image
          src="https://www.acquisition.com/hubfs/Acquisition_September2022/Alex_and_Leila_Extended-1.png"
          alt="Laila and Alex"
          width={400}
          height={822}
        />
      </div>
      <div>
        <h3>VALUES MATTER.</h3>
        <p>Select each card below to reveal more information.</p>
      </div>
      <div>
        <div>
          <div>UNIMPEACHABLE CHARACTER</div>
          {/* BE THE TYPE OF PERSON WITH WHOM PEOPLE ARE ALWAYS PROUD TO ASSOCIATE, PERSONALLY AND PROFESSIONALLY */}
          <div>SINCERE CANDOR</div>
          {/* NOTHING GREAT CAN BE BUILT WITHOUT FEEDBACK; INTERNALLY OR EXTERNALLY */}
        </div>
        <div>COMPETITVE GREATNESS</div>
        {/* BE AT YOUR BEST WHEN YOUR BEST IS NEEDED. YOU ENJOY A HARD CHALLEN */}
      </div>
      <GreatPlaceToWork />
      <div>
        <h3>ARE YOU A PERFECT FIT?</h3>
      </div>
      <PaginateJobs />
    </div>
  );
};

OurCulture.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default OurCulture;
