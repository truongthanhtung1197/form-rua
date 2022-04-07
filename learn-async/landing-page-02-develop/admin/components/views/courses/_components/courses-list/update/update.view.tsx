import { TextInput } from "components/form";
import { memo } from "react";
import ContentHeader from "components/layouts/content-header";

function UpdateForm(props: any) {
  const { handleSubmit, handleCancel } = props;
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={false}>
        <p className="text-lg">Các khoá học</p>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Khoá học"} name={"courseName"} />
        <TextInput label={"Ngày khai giảng"} name={"openingDate"} type={"date"} />
        <TextInput label={"Lịch học"} name={"schedule"} />
        <TextInput label={"Giờ học"} name={"time"} />
        <TextInput label={"Giảng viên"} name={"teacher"} />
        <TextInput label={"Số buổi học"} name={"numberOfLessons"} />
        <TextInput label={"Trình độ"} name={"level"} />
        <TextInput label={"Học phí"} name={"fee"} />
        <TextInput label={"Địa điểm"} name={"location"} />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleCancel} type="button">
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Hoàn thành
          </button>
        </div>
      </form>
    </div>
  );
}
export default memo(UpdateForm);
