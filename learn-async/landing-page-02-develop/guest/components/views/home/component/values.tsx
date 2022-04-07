import { VALUES } from "components/views/home/home.constant";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";

function Values() {
  return (
    <section className="mt-[67px] items-center flex flex-col">
      <div>
        <p className="text-[48px] leading-[57.28px] mb-[51px]">GIÁ TRỊ TỐT ĐẸP</p>
      </div>
      <div className="grid grid-cols-3 gap-[15px] xl:gap-[50px] 2xl:gap-[70px]">
        {VALUES.map((item: any, i: number) => {
          return (
            <div key={i}>
              <div className="aspect-w-3 aspect-h-2 relative flex items-center justify-center overflow-hidden rounded-t-xl">
                <Image
                  src={item.img}
                  alt="image"
                  placeholder="blur"
                  blurDataURL={item.img}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="bg-gray200 rounded-b-xl flex items-center">
                <p className="xl:leading-[25px] lg:leading-[21px] m-[5px] xl:m-[16px] lg:text-[18px] xl:text-[20px] line-clamp-2 text-left">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[25px] flex ml-auto flex-1">
        <Seemore navigation={""} />
      </div>
    </section>
  );
}
export default memo(Values);
