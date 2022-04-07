import { CoursesListCarousel } from "components";
import Comment from "./comment";
import Featured from "../Featured-Post";
import NewPost from "../news-post";
import PostDetailView from "./PostDetail.view";
import PostList from "../posts/post.list";
import React from "react";
import SearchInput from "components/form/search-input";

function PostDetail() {
  return (
    <div className="container mx-auto not-italic mt-[115px] text-center ">
      <PostDetailView />
      <Comment />
      <PostList />
      <div className="px-4">
        {" "}
        <SearchInput placeholder={"Tìm kiếm bài viết"} />
      </div>
      <NewPost />
      <Featured />
      <div className="px-4 mt-[25px]">
        {" "}
        <CoursesListCarousel />
      </div>
    </div>
  );
}

export default PostDetail;
