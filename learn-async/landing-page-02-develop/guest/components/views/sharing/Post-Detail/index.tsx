import { ComponentTitle, CoursesListCarousel, NewsList } from "components";
import { PostsList } from "components/views/courses/_components";
import Comment from "./comment/post-comment";
import FeaturedPosts from "../Featured-Posts";
import PostDetailView from "./PostDetail.view";
import React, { memo } from "react";
function PostDetail() {
  return (
    <div className="container mx-auto mt-[140px] px-[180px]">
      <section>
        <ComponentTitle title={"BÀI VIẾT"} className={"mt-[50px]"} />
      </section>

      <section className="my-14 px-5  gap-12  flex flex-cols-2 justify-between items-start mx-auto">
        <FeaturedPosts />
        <div className="not-italic w-2/3  ">
          <PostDetailView />
          <Comment />{" "}
        </div>
      </section>

      <section className=" gap-30">
        <PostsList />
        <ComponentTitle title={"BÁO CHÍ"} className={"mt-[50px]"} />
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
export default memo(PostDetail);
