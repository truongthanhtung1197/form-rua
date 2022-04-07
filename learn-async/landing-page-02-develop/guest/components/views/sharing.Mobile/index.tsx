import { CoursesListCarousel } from "components";
import FeaturedPost from "./Featured-Post";
import NewPost from "./news-post";
import Posts from "./posts";
import React, { memo } from "react";

function SharingMobi() {
  return (
    <div className="container mx-atuto not-italic mt-[115px] text-center ">
      <Posts />
      <NewPost />
      <FeaturedPost />
      <div className="mt-[33px] px-4">
        <div className="flex justify-between gap-5 mt-16 mb-12 ">
          <h1 className="text-[24px] leading-[29px] font-normal ">CÁC KHOÁ ĐÀO TẠO</h1>
          <div className="flex-auto h-[1px] bg-gray250 mt-[20px]"></div>
        </div>
        <CoursesListCarousel />
      </div>
    </div>
  );
}

export default memo(SharingMobi);
