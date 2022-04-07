import { COURSE_STATUS } from "constants/course.constant";
import { TextInput } from "components/form";
import { useRouter } from "next/router";
import ContentHeader from "components/layouts/content-header";
import Icon from "styles/images/review";
import Image from "next/image";
import React, { memo } from "react";
function CreateCourseForm(props: any) {
  const { handleSubmit, values, setFieldValue } = props;
  const router = useRouter();

  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={false}>
        <div className="text-lg flex justify-start items-end gap-2">
          <p className="font-medium">Tạo khoá học</p>
          <span>{">"}</span>
          <div className="flex justify-start items-center gap-3">
            <p>{router.query.slug}</p>
            <Image src={Icon.icon_edit} alt="icon" />
          </div>
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Tên khoá học"} name={"courseName"} />
        <TextInput label={"Ngày khai giảng"} name={"openingDate"} type={"date"} />
        <TextInput label={"Lịch học"} name={"schedule"} />
        <TextInput label={"Giờ học"} name={"time"} />
        <TextInput label={"Giảng viên"} name={"teacher"} />
        <TextInput label={"Số buổi học"} name={"numberOfLessons"} />
        <TextInput label={"Trình độ"} name={"level"} />
        <TextInput label={"Học phí"} name={"fee"} />
        <TextInput label={"Địa điểm"} name={"location"} />
        <div className="flex justify-end items-end gap-14">
          <div className="flex justify-start items-center gap-4 mt-5">
            <input
              type="radio"
              name="status"
              value={COURSE_STATUS.SHOW}
              checked={values.status === COURSE_STATUS.SHOW ? true : false}
              onClick={() => setFieldValue("status", COURSE_STATUS.SHOW)}
            />
            <label className="font-semibold text-lg">Hiện</label>
          </div>
          <div className="flex justify-start items-center gap-4 mt-[30px]">
            <input
              type="radio"
              name="status"
              value={COURSE_STATUS.HIDE}
              checked={values.status === COURSE_STATUS.HIDE ? true : false}
              onClick={() => setFieldValue("status", COURSE_STATUS.HIDE)}
            />
            <label className="font-semibold text-lg">Ẩn</label>
          </div>
        </div>

        <div className="flex justify-end my-[52px]">
          <button
            className="ml-1 h-11 px-[60px] w-min flex justify-center items-center rounded font-semibold text-white text-1xl bg-bluenextbtn active:opacity-70 cursor-pointer"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
export default memo(CreateCourseForm);
