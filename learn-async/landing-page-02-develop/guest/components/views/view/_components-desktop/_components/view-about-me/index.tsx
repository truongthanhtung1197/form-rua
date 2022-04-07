import { VIEW_ABOUT_ME } from "components/views/home/home.constant";
import { VIEW_RESPONSIVE } from "constants/course.constant";
import { formatContentView } from "utils/common";
import Carousel from "react-multi-carousel";
import ComponentTitle from "components/layout/component_title";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";

function ViewAboutMe() {
  const renderView = () => {
    return (
      <div className="flex flex-col gap-12">
        {VIEW_ABOUT_ME.map(
          (item: { avatar: any; ownerName: string; date: string; content: string }, i: number) => {
            return (
              <div key={i} className="rounded-[7px] border-[3px] border-solid border-bluebtn">
                <div className="m-[18px]">
                  <div className="rounded-[7px] bg-black text-white p-5">
                    <div className="flex justify-start items-center md:gap-4 gap-2">
                      <div className="sm:w-12 w-6 sm:h-12 h-6 relative">
                        <Image src={item.avatar} alt="DXP" layout="fill" className="rounded-full" />
                      </div>
                      <div className="flex justify-start items-center gap-1">
                        <p className="font-semibold sm:text-2xl text-lg">{item.ownerName}</p>
                        <p>-</p>
                        <p className="opacity-40 font-normal">{item.date}</p>
                      </div>
                    </div>
                    <p className="text-white sm:text-xl text-lg sm:leading-[30px] leading-[22px] md:mt-5 mt-[15px]">
                      {formatContentView(item.content, 650)}
                    </p>
                  </div>
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
    <div className="md:mt-16 mt-9">
      <div className="md:block hidden">
        <ComponentTitle title={"góc nhìn về tôi"} className={"mb-12"} />
      </div>
      <h1 className="md:hidden block uppercase text-xl text-center mb-6">góc nhìn về tôi</h1>
      <div className="md:max-h-[800px] max-h-[650px] overflow-y-scroll">{renderView()}</div>
    </div>
  );
}

export default memo(ViewAboutMe);
