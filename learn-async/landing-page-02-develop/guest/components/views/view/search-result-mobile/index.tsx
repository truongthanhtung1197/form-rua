import FeaturedNews from "../_components-mobile/featured-news";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/home/gallery/photos";
import Link from "next/link";
import React, { memo } from "react";
import SearchInput from "components/form/search-input";
function SerachResult() {
  return (
    <div className="px-5 mt-28 mx-auto">
      <SearchInput placeholder="Tìm kiêm bài viết" />
      <div className="mb-11 mt-5">
        <div className="h-[175px] w-full relative">
          <Image
            src={Images.img14}
            alt=""
            layout="fill"
            objectPosition={"center"}
            placeholder="blur"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-start gap-[5px] my-4">
          <p className="font-bold text-sm">Cafebiz.vn</p>
          <p className="text-sm opacity-40 ">05/08/2019</p>
        </div>
        <article className="my-2">
          <h1 className="font-semibold leading-[29px] text-2xl">
            Dương Xuân Phi - Founder Utopia Eco Lodge Resort đang xây dựng mạng xã hội du lịch: ‘Đầu
            tư thông minh là đầu tư vào tầm nhìn của Leader’
          </h1>
          <p className="text-lg leading-[24px] text-gray800 mt-4">
            Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường xuyên có ý tưởng điên rồ, bởi tôi
            thường xuyên có ý tưởng điên rồ, Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường
            xuyên có ý tưởng điên rồ, bởi tôi thường xuyên có ý tưởng điên rồ,Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laborum reprehenderit sit nesciunt exercitationem
            magnam. Cumque vitae quae consectetur esse impedit.
          </p>
        </article>
        <FeaturedNews />
        <div className="flex justify-end items-center gap-2 mt-5">
          <Link href="">
            <a className="text-lg text-gray800">Xem thêm</a>
          </Link>
          <Image src={Icons.next} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default memo(SerachResult);
