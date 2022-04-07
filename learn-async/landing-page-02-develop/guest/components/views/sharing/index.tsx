import { ComponentTitle, NewsList } from "components";
import CoursesListCarousel from "components/courses-list-carousel";
import FeaturedPosts from "./Featured-Posts";
import Post from "./Post";
import React, { memo } from "react";

function Sharing() {
  return (
    <div className="container mx-auto mt-[140px] px-[180px] ">
      <section>
        <ComponentTitle title={"BÀI VIẾT"} className={"mt-[50px]"} />
      </section>

      <section className="my-14 px-5 gap-12  flex flex-cols-2 justify-between items-start mx-auto">
        <FeaturedPosts />
        <Post />
      </section>

      <section className=" gap-30">
        <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
        <NewsList />
        <div className="mb-[25px]">
          {" "}
          <ComponentTitle title={"CÁC KHOÁ ĐÀO TẠO"} className={"mt-[50px]"} />
        </div>
        <CoursesListCarousel />
      </section>
    </div>
  );
}

export default memo(Sharing);
