import { COURSE_LIST_FILTER } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher } from "utils/common";
import Image from "next/image";
import Images from "styles/images/courses";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";

function CoursesList() {
  const { data, error } = useSWR(
    `/api/courses?filter=${JSON.stringify(COURSE_LIST_FILTER)}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderCoursesList = () => {
    if (data)
      return data?.data.map((course: { name: string; id: number }, index: number) => (
        <div key={index}>
          <section className="relative">
            <Image src={Images.course1} alt="DuongXuanPhi" layout="responsive" placeholder="blur" />
            <div className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2  bg-gray200 flex items-center justify-center rounded-md shadow-md md:w-[65%] lg:w-[55%] 2xl:p-12 xl:p-7 lg:p-6 md:p-5 p-9">
              <h2 className="md:text-2xl text-lg font-bold border-y-2 border-solid border-black text-left py-5">
                GET THE GOODS
              </h2>
            </div>
          </section>
          <div className="mt-12">
            <Link href={`${ROUTERS.COURSE_DETAIL}/${course.id}`}>
              <a>
                <p className="font-semibold text-darkblue pt-20 pr-5">{course.name}</p>
              </a>
            </Link>
          </div>
        </div>
      ));
  };
  return <div className="md:grid md:grid-cols-3 md:gap-5">{renderCoursesList()}</div>;
}

export default memo(CoursesList);
