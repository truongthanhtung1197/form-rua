import { ROUTERS } from "constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Banner() {
  return (
    <div className="h-[783px] bg-black flex">
      <div className="w-[521px] h-full relative ml-[89px]">
        <Image
          src={images.DXP_banner}
          blurDataURL={images.DXP_banner}
          layout="fill"
          placeholder="blur"
          alt="background Duong Xuan Phi"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <p className="text-white w-[501px] relative">
          Dương Xuân Phi (1990) là một doanh nhân trẻ, một diễn giả truyền cảm hứng. Từ những hành
          trình của tuổi trẻ, những bài viết, những buổi chia sẻ của anh đã truyền cảm hứng, động
          lực và tạo nên những ảnh hưởng tích cực, mạnh mẽ đến hàng ngàn bạn trẻ. Anh được biết đến
          là người có những tư duy khác biệt, dám dấn thân, làm những việc người khác chưa từng làm
          và một ý chí vô cùng mạnh mẽ. Bất cứ lĩnh vực nào anh tham gia, anh cũng đều gặt hái được
          nhiều thành công bởi sự kiên trì, bền bỉ và tinh thần không bao giờ từ bỏ của mình. Hiện
          tại, anh đang theo đuổi một giấc mơ lớn về ngành công nghệ nhằm mang lại những giá trị tốt
          đẹp hơn cho cộng đồng.
          <Link href={ROUTERS.ABOUT_ME} passHref>
            <p className="w-[143px] h-[35px] text-black text-[18px] bg-white font-semibold rounded-lg flex justify-center cursor-pointer items-center absolute bottom-[-60px] right-0 active:bg-gray300">
              Về Tôi
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default memo(Banner);
