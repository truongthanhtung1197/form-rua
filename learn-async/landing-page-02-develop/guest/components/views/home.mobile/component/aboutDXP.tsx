import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/home";

function aboutDXP() {
  return (
    <div className="w-full">
      <div className="w-full h-[400px] relative">
        <Image
          src={images.bg_DXP_mobile}
          blurDataURL={images.bg_DXP_mobile}
          layout="fill"
          placeholder="blur"
          alt="background Duong Xuan Phi"
        />
      </div>
      <div className="bg-graye1">
        <div className="mx-[15px] py-[25px]">
          <div>
            <p className="text-normal-mobile">Dương Xuân Phi:</p>
            <p className="text-normal-mobile mt-[6px]">Founder/CEO Uto Tech JSC</p>
            <p className="text-normal-mobile mt-[6px]">Founder/CEO Eco Resort - Utopia Eco Lodge</p>
            <p className="text-normal-mobile mt-[6px]">Founder/CEO tại Utopia Travel</p>
            <p className="text-normal-mobile mt-[6px]">Founder/CEO Uto Academy</p>
            <p className="text-normal-mobile mt-[6px]">Founder jGooooo Inspirer and Speaker</p>
          </div>
          <div className="">
            <p className="text-normal-mobile mt-[6px]">
              Hầu hết những người theo dõi anh trong khoảng thời gian rất lâu, hiểu rõ quá trình
              phát triển của anh, cũng như sự nhất quán trong suy nghĩ, lời nói lẫn việc làm. Họ sẽ
              thấy anh nói được, làm được, nhất quán trong mọi việc, luôn giữ lời hứa, có ý chí và
              kiên định, có hoài bão, sống theo giá trị cốt lõi, luôn chịu trách nhiệm, và giàu lòng
              biết ơn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(aboutDXP);
