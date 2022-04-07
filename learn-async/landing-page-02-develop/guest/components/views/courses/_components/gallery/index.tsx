import "react-multi-carousel/lib/styles.css";
import { GALLERY_RESPONSIVE } from "constants/course.constant";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";

function Gallery() {
  const buttonLeft = () => (
    <div className="cursor-pointer top-1/2 absolute left-0 ">
      <Image src={Icons.left} width={21} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="cursor-pointer top-1/2 absolute right-0 ">
      <Image src={Icons.right} width={21} height={35} alt="arrow right" />
    </div>
  );
  return (
    <div className="md:mt-20 mt-7">
      <Carousel
        responsive={GALLERY_RESPONSIVE}
        swipeable
        customLeftArrow={buttonLeft()}
        customRightArrow={buttonRight()}
        className="relative"
      >
        <Image src={Images.img1} alt="DuongXuanPhi" placeholder="blur" layout="responsive" />
        <Image src={Images.img1} alt="DuongXuanPhi" placeholder="blur" layout="responsive" />
        <Image src={Images.img1} alt="DuongXuanPhi" placeholder="blur" layout="responsive" />
      </Carousel>
    </div>
  );
}

export default memo(Gallery);
