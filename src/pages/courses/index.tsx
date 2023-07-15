"client-only";

import { ReactElement, useEffect } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";

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
    <div>
      <div>
        ALERT: I would need a copy of this video on my server to playback
      </div>
      <div className="iframe_wrapper">
        <div className="wistia_responsive_padding pt-1/2 relative">
          <div className="wistia_responsive_wrapper absolute left-0 top-0 h-full w-full">
            <div className="wistia_embed wistia_async_oatdpbzynr videoFoam=true relative h-full w-full">
              <div className="wistia_swatch absolute left-0 top-0 h-full w-full overflow-hidden opacity-0">
                <Image
                  src="https://fast.wistia.com/embed/medias/oatdpbzynr/swatch"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Courses;
