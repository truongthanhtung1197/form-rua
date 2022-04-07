import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/home";

function aboutDXP() {
  return (
    <div className="mt-[105px] h-[545px] w-full relative">
      <div>
        <Image
          src={images.bg_DXP}
          blurDataURL={images.bg_DXP}
          layout="fill"
          placeholder="blur"
          alt="background Duong Xuan Phi"
        />
      </div>
      <div className="absolute leading-[22px] text-[20px] ml-[179px] mt-[77px] container xl:px-[94px] lg:px-[50px] ">
        <div>
          <p className="text-normal">Dương Xuân Phi:</p>
          <p className="text-normal mt-[8px]">Founder/CEO Uto Tech JSC </p>
          <p className="text-normal mt-[8px]">Founder/CEO Eco Resort - Utopia Eco Lodge</p>
          <p className="text-normal mt-[8px]">Founder/CEO tại Utopia Travel </p>
          <p className="text-normal mt-[8px]">Founder/CEO Uto Academy</p>
          <p className="text-normal mt-[8px]">Founder jGooooo Inspirer and Speaker</p>
        </div>
        <div className="w-[512px] h-[193px] mt-[14px] text-justify leading-[30px] text-[20px]">
          <p>
            Hầu hết những người theo dõi anh trong khoảng thời gian rất lâu, hiểu rõ quá trình phát
            triển của anh, cũng như sự nhất quán trong suy nghĩ, lời nói lẫn việc làm. Họ sẽ thấy
            anh nói được, làm được, nhất quán trong mọi việc, luôn giữ lời hứa, có ý chí và kiên
            định, có hoài bão, sống theo giá trị cốt lõi, luôn chịu trách nhiệm, và giàu lòng biết
            ơn.
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(aboutDXP);
