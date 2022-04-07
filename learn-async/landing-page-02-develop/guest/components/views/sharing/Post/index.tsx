import Image from "next/image";
import Images from "styles/images/sharing";
import Link from "next/link";
import PostList from "./post.list";
import PostsNew from "../new-posts";
import React, { memo } from "react";

function Posts() {
  return (
    <div className="w-2/3 not-italic ">
      <div>
        <Image src={Images.DxpFake} placeholder="blur" alt="DXP" layout="responsive" />
        <Link href="/sharing/detail" passHref>
          <div className="mt-[10px] w-full">
            <a className="font-bold text-[24px] leading-[29px] ">
              Dương Xuân Phi - Founder Utopia Eco Lodge Resort đang xây xã hội du lịch: ‘Đầu tư
              thông minh là đầu tư vào tầm nhìn của Leader’
            </a>
          </div>
        </Link>

        <p className="font-normal text-[18px] leading-[21px] opacity-40 mt-[5px]">05/08/2019</p>
        <p className="text-[20px] leading-[30px] font-normal text-gray800 mt-[5px]">
          Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường xuyên có ý tưởng điên rồ, bởi tôi
          thường xuyên có ý tưởng điên rồ, Người ta gọi tôi là &quot;gã điên&quot; bởi tôi thường
          xuyên có ý tưởng điên rồ, bởi tôi thường xuyên có ý tưởng điên rồ,
        </p>
      </div>

      <PostList />
      <PostsNew />
    </div>
  );
}

export default memo(Posts);
