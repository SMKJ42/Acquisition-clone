import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";
import Image from "next/image";

const Courses: NextPageWithLayout = () => {
  return (
    <div>
      <div className="iframe_wrapper">
        <script
          src="https://fast.wistia.com/embed/medias/oatdpbzynr.jsonp"
          async
        ></script>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async
        ></script>
        <div className="wistia_responsive_padding pt-1/2 relative">
          <div className="wistia_responsive_wrapper absolute left-0 top-0 h-full w-full">
            <div className="wistia_embed wistia_async_oatdpbzynr videoFoam=true relative h-full w-full">
              <div className="wistia_swatch absolute left-0 top-0 h-full w-full overflow-hidden opacity-0">
                <Image
                  src="https://fast.wistia.com/embed/medias/oatdpbzynr/swatch"
                  // style={ filter: 'blur(5px)', height: '100%', object-fit: 'contain;width:100%'}
                  alt=""
                  aria-hidden="true"
                  // onload="this.parentNode.style.opacity=1;"
                  className="h-full w-full object-cover"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Courses;
