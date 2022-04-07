import { VIEW_ABOUT_ME } from "components/views/home/home.constant";
import { VIEW_RESPONSIVE } from "constants/course.constant";
import { formatContentView } from "utils/common";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";

function ViewAboutMe() {
  const renderView = () => {
    return (
      <div className="flex flex-col gap-2">
        {VIEW_ABOUT_ME.map(
          (item: { avatar: any; ownerName: string; date: string; content: string }, i: number) => {
            return (
              <div key={i} className="rounded-[7px] border-[3px] border-solid border-bluebtn">
                <div className="m-[10px] bg-black rounded-[7px] text-white p-5">
                  <div className="flex justify-start items-center gap-2">
                    <div className="sm:w-12 w-6 sm:h-12 h-6 relative">
                      <Image src={item.avatar} alt="DXP" layout="fill" className="rounded-full" />
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <p className="font-semibold text-lg">{item.ownerName}</p>
                      <p>-</p>
                      <p className="opacity-40 font-normal">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-white text-lg  leading-[22px] md:mt-5 mt-[15px]">
                    {formatContentView(item.content, 650)}
                  </p>
                  <div className="mt-5">
                    <Carousel responsive={VIEW_RESPONSIVE} arrows={false}>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-[120px] relative mx-2">
                        <Image
                          className="rounded-md"
                          src={Images.img2}
                          alt="dxp"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  };
  return (
    <div className="mt-9">
      <h1 className="uppercase text-xl text-center mb-6">góc nhìn về tôi</h1>
      <div className="max-h-[640px] overflow-y-scroll">{renderView()}</div>
    </div>
  );
}

export default memo(ViewAboutMe);
