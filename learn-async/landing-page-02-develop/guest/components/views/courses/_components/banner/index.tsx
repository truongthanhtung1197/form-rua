import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";

function Banner() {
  return (
    <div className="relative container mt-28">
      <div className="w-screen relative">
        <Image src={Images.banner} alt="DuongXuanPhi" layout="responsive" placeholder="blur" />
      </div>
      <article className="absolute sm:top-1/2 top-[58%] -translate-y-[80%] md:w-[30%] w-2/5 2xl:-right-[7%] lg:right-[12%]  right-[8%] ">
        <h1 className="lg:text-4xl text-base font-semibold">GET THE GOOD</h1>
        <p className="lg:text-2xl md:text-lg text-xs font-normal md:mt-5 mt-1 sm:leading-[30px] leading-[12px]">
          Trí tuệ là sức mạnh để bảo vệ bản thân cũng như là chìa khoá để mở ra những cánh cửa tương
          lai của bạn
        </p>
      </article>
    </div>
  );
}

export default memo(Banner);
