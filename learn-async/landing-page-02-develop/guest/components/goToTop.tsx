import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/home";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      <div
        onClick={scrollToTop}
        className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] cursor-pointer fixed bottom-4 right-4"
      >
        <Image
          src={images.icon_goToTop}
          layout="fill"
          placeholder="blur"
          blurDataURL={images.icon_goToTop}
          alt="go to top"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default memo(GoToTop);
