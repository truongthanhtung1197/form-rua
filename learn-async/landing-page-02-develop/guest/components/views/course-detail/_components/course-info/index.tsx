import { formatDate } from "utils/common";
import React, { memo } from "react";

function CourseInfo({ data }: any) {
  const { fee, level, location, numberOfLessons, openingDate, schedule, teacher, time } = data;
  return (
    <div className="bg-white rounded-[7px] p-6 md:mt-7 mt-4">
      <h1 className="text-2xl md:text-left text-center font-semibold mb-4">Thông tin khoá học</h1>
      <ul>
        <li className="mt-3">
          <p className="text-lg">
            Ngày khai giảng:
            <p className="text-lg font-bold ml-1 inline">{formatDate(openingDate)}</p>
          </p>
        </li>
        <li className="mt-3">
          <p className="text-lg">
            Lịch học:
            <p className="text-lg font-bold inline ml-1">{schedule}</p>
          </p>
        </li>
        <li className="mt-3 flex justify-start items-start gap-1">
          <p className="text-lg">
            Giờ học:
            <p className="text-lg font-bold inline ml-1">{time}</p>
          </p>
        </li>
        <li className="mt-3 flex justify-start items-start gap-1">
          <p className="text-lg">
            Giảng viên:
            <p className="text-lg font-bold inline ml-1">{teacher}</p>
          </p>
        </li>
        <li className="mt-3 flex justify-start items-start gap-1">
          <p className="text-lg">
            Số buổi học:
            <p className="text-lg font-bold inline ml-1">{numberOfLessons}</p>
          </p>
        </li>
        <li className="mt-3 flex justify-start items-start gap-1">
          <p className="text-lg">
            Trình độ:
            <p className="text-lg font-bold inline ml-1">{level}</p>
          </p>
        </li>
        <li className="mt-3 flex justify-start items-start gap-1">
          <p className="text-lg">
            Học phí:
            <p className="text-lg font-bold inline ml-1">{fee}</p>
          </p>
        </li>
        <li className="mt-3 justify-start items-start gap-1">
          <p className="text-lg inline">
            Địa điểm:
            <p className="text-lg font-bold inline ml-1">{location}</p>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default memo(CourseInfo);
