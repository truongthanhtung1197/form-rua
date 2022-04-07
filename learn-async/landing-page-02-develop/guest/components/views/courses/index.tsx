import { Banner, CoursesList, Gallery, PostsList } from "./_components";
import { ComponentTitle, NewsList, RegisterForm, ReviewList, SearchInput } from "components";
import React, { memo } from "react";

function Courses() {
  return (
    <div className="bg-grayf6 pb-14">
      <Banner />
      <div className="font-semibold md:text-5xl xl:px-[94px] lg:px-[50px] px-5 container mx-auto">
        <h1 className="sm:mb-24 mb-9 mt-7 md:text-5xl text-2xl text-center">CÁC KHOÁ ĐÀO TẠO</h1>
        <CoursesList />
        <Gallery />
        <div className="md:my-14 my-0 gap-10 md:grid md:grid-cols-3 flex flex-col-reverse mx-auto">
          <div className="col-span-2 sm:mx-0 -mx-5">
            <ReviewList />
          </div>
          <div className="w-full">
            <SearchInput placeholder={"Tìm kiếm..."} />
            <RegisterForm />
          </div>
        </div>
        <PostsList />
        <ComponentTitle title={"báo chí"} className={"mt-[50px]"} />
        <NewsList />
      </div>
    </div>
  );
}

export default memo(Courses);
