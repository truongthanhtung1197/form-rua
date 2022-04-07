import { ROUTERS } from "constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Banner() {
  return (
    <div className="h-[630px] bg-black flex w-full mt-[88px]">
      <div className="px-[15px] w-full">
        <div className="w-full flex mt-[26px]">
          <div className="w-[178px] h-[267px] relative mr-[5px]">
            <Image
              src={images.DXP_banner}
              blurDataURL={images.DXP_banner}
              layout="fill"
              placeholder="blur"
              alt="background Duong Xuan Phi"
            />
          </div>
          <p className="text-white font-normal text-[18px] leading-[16px] flex-1 ml-[6px] text-justify">
            Dương Xuân Phi (1990) là một doanh nhân trẻ, một diễn giả truyền cảm hứng. Từ những hành
            trình của tuổi trẻ, những bài viết, những buổi chia sẻ của anh đã truyền cảm hứng, động
            lực và tạo nên những ảnh hưởng tích cực, mạnh mẽ đến hàng ngàn bạn trẻ. Anh được biết
            đến là người có những tư duy khác biệt,
          </p>
        </div>

        <div className="flex flex-col flex-1 justify-center items-center mt-[17px] relative">
          <p className="text-white font-normal text-[18px] leading-[16px]">
            dám dấn thân, làm những việc người khác chưa từng làm và một ý chí vô cùng mạnh mẽ.
            <br />
            Anh được biết đến là người có những tư duy khác biệt, dám dấn thân, làm những việc người
            khác chưa từng làm và một ý chí vô cùng mạnh mẽ.
            <br />
            Bất cứ lĩnh vực nào anh tham gia, anh cũng đều gặt hái được nhiều thành công bởi sự kiên
            trì, bền bỉ và tinh thần không bao giờ từ bỏ của mình.
            <br />
            Hiện tại, anh đang theo đuổi một giấc mơ lớn về ngành công nghệ nhằm mang lại những giá
            trị tốt đẹp hơn cho cộng đồng.
          </p>
          <Link href={ROUTERS.ABOUT_ME} passHref>
            <p className="w-[98px] h-[32px] text-black text-[15px] bg-white font-semibold	 rounded-lg flex justify-center items-center absolute bottom-[-60px] right-0">
              Về Tôi
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
