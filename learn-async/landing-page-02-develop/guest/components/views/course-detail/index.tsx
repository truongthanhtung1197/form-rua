import { Banner, Gallery } from "components/views/courses/_components";
import {
  ComponentTitle,
  CoursesListCarousel,
  RegisterForm,
  ReviewList,
  SearchInput,
} from "components";
import { CourseInfo } from "components/views/course-detail/_components";
import { EditorDynamic } from "components/form/editor";
import { fetcher } from "utils/common";
import { useRouter } from "next/router";
import React, { memo } from "react";
import useSWR from "swr";

function CourseDetail() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error } = useSWR(`/api/course-detail/${id}`, fetcher);
  if (!data) return <div className="mt-96">Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderIntro = () => {
    if (data) {
      return (
        <p className="md:text-xl text-lg md:leading-[30px] leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.introduction} />
        </p>
      );
    }
  };
  const renderParticipant = () => {
    if (data)
      return (
        <p className="md:text-xl text-lg md:leading-[30px] leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.description} />
        </p>
      );
  };
  const renderContent = () => {
    if (data)
      return (
        <p className="md:text-xl text-lg md:leading-[30px] leading-[18px] text-justify pb-3">
          <EditorDynamic content={data.content} />
        </p>
      );
  };
  return (
    <>
      <Banner />
      <div className="container xl:px-[94px] md:px-[50px] px-5 mx-auto pb-14">
        <h1 className="text-orangetitle text-center md:text-4xl text-2xl font-semibold mb-12">
          TÊN KHOÁ ĐÀO TẠO
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[54px] gap-[13px]">
          <div className="col-span-2">
            <div className="bg-white md:py-7 py-5 md:px-14 px-6 rounded-[7px]">
              <h1 className="text-2xl md:text-left text-center font-bold text-bluetext md:mb-7 mb-4">
                GIỚI THIỆU KHÓA HỌC
              </h1>
              {renderIntro()}
            </div>
            <div className="bg-white py-7 md:px-14 px-6 rounded-[7px] md:my-7 my-4">
              <h1 className="text-2xl md:text-left text-center font-bold text-bluetext mb-7">
                ĐỐI TƯỢNG THAM GIA
              </h1>
              {renderParticipant()}
            </div>
            <div className="bg-bluebg py-7 mb-10 md:px-14 px-6 rounded-[7px]">
              <h1 className="text-2xl md:text-left text-center font-bold text-bluetext mb-7">
                NỘI DUNG KHOÁ HỌC
              </h1>
              {renderContent()}
            </div>
            <ReviewList />
          </div>
          <div>
            <SearchInput placeholder={"Tìm kiếm..."} />
            <CourseInfo data={data?.courses[0]} />
            <RegisterForm />
          </div>
        </div>
        <Gallery />
        <ComponentTitle title={"các khoá đào tạo"} className={"mt-16 mb-12"} />
        <div className="pb-24">
          <CoursesListCarousel />
        </div>
      </div>
    </>
  );
}

export default memo(CourseDetail);
