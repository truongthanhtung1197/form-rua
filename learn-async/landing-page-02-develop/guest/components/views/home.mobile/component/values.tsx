import { VALUES } from "../home.mobile.constants";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
function Values() {
  return (
    <section className="mt-[100px] relative pb-[5px]">
      <div className="w-full flex justify-center">
        <p className="text-[24px] font-nomarl">GIÁ TRỊ TỐT ĐẸP</p>
      </div>
      <div className="mt-[18px]">
        {VALUES &&
          VALUES.map((item: any, i: number) => (
            <div key={i} className={`pt-[16px] ${i > 0 ? "border-t border-gray250" : ""}`}>
              <p className="mx-[15px] font-semibold text-[20px] leading-[22px] text-blue011">
                {item.title}
              </p>
              <div className="mx-[15px] mt-[10px] flex">
                <div className="w-[136px] h-[101px]">
                  <Image
                    src={item.img}
                    width={163}
                    height={101}
                    alt="image"
                    placeholder="blur"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1 ml-[19px]">
                  <p className="text-[12px] font-normal leading-[14.06px] opacity-40">
                    {item.date}
                  </p>
                  <p className="text-[14px] leading-[14px] font-normal mt-[10px] text-black300">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-end pt-[5px] pr-[15px]">
        <Seemore navigation={""} />
      </div>
      
    </section>
  );
}
export default memo(Values);
