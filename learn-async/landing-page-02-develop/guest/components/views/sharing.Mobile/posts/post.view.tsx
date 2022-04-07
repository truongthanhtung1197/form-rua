import Image from "next/image";
import Images from "styles/images/sharingMobi";
import Link from "next/link";
import PostList from "./post.list";
import React, { memo } from "react";
import SearchInput from "components/form/search-input";
function PostView() {
  return (
    <div>
      <div>
        <Image src={Images.avtDXP} alt="DXP" placeholder="blur" width={188} height={188} />
        <h1 className="text-[18px] leading-[18px] font-normal align-center mt-[22px] mb-[26px] px-4">
          Một kẻ Dại Khờ luôn theo đuổi ước mơ tới cùng và mong muốn truyền cảm hứng sống cho tất cả
          mọi người!
        </h1>
        <div className="px-4">
          <Image src={Images.DXPFake} alt="DXP" placeholder="blur" />
        </div>
        <Link href="/sharing/detail" passHref>
          <div>
            <a className="font-semibold text-[18px] leading-[22px] px-4 text-left">
              NHỮNG BÀI HỌC SÂU SẮC CẦN KHẮC CỐT GHI TÂM
            </a>
          </div>
        </Link>

        <p className="opacity-50 text-[14px] leading-[16px] font-normal mt-[5px] px-4">
          05/08/2019
        </p>
        <p className="text-[14px] leading-[18px] font-normal text-justify px-4 mt-[5px]">
          Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường xuyên có ý tưởng điên rồ, bởi tôi
          thường xuyên có ý tưởng điên rồ, Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường
          xuyên có ý tưởng điên rồ, bởi tôi thường xuyên có ý tưởng điên rồ,
        </p>
      </div>
      <PostList />
      <div className="px-4">
        <SearchInput placeholder={"Tìm kiếm bài viết"} />
      </div>
    </div>
  );
}

export default memo(PostView);
