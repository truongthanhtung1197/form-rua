import { breakpoints } from "./photo.config";
import Image from "next/image";
import Images from "styles/images/home/gallery/photos";
import Masonry from "react-masonry-css";
import React, { memo } from "react";

const data = Object.values(Images);
function PhotoView() {
  const renderImg = () => {
    if (data) {
      return data.map((img: any, index: number) => {
        return (
          <div className="md:mb-5 mb-3" key={index}>
            <Image placeholder="blur" src={img} layout="responsive" alt="DuongXuanPhi" />
          </div>
        );
      });
    }
  };

  return (
    <div className="">
      <Masonry breakpointCols={breakpoints} className="flex mt-2 md:gap-5 gap-3">
        {renderImg()}
      </Masonry>
    </div>
  );
}

export default memo(PhotoView);
