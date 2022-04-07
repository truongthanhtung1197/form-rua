import Image from "next/image";
import Images from "styles/images/home/gallery/photos";
import PlayVideoBtn from "components/button/playVideoButton";
import React, { memo } from "react";

const imgList = Object.values(Images);
function VideoView() {
  const renderThumnail = () => {
    return (
      <div className="grid grid-cols-4 gap-5 mb-20">
        {imgList.map((img, index) => {
          return (
            <div key={index} className="text-left">
              <div className="relative h-36">
                <Image
                  className="rounded-lg"
                  src={img}
                  alt="DuongXuanPhi"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <PlayVideoBtn />
              </div>
              <h1 className="block text-lg font-semibold mt-5">
                Một ngày lênh đênh trên biển cách đất liền hơn 1000km
              </h1>
            </div>
          );
        })}
      </div>
    );
  };
  return <>{renderThumnail()}</>;
}

export default memo(VideoView);
