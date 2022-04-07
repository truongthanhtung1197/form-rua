import { FileContent, MultiFileInput, TextInput } from "components/form";
import ContentHeader from "components/layouts/content-header";
import React, { memo } from "react";

function UpdateCourseProgram(props: any) {
  const { handleSubmit, handleCancel, setFieldValue, values } = props;
  const handleChangeFile = (values: any) => {
    setFieldValue("files", values);
  };
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={true}>
        <p className="text-lg">Chương trình học</p>
      </ContentHeader>

      <form onSubmit={handleSubmit}>
        <TextInput label={"Tên chương trình"} name={"name"} />
        <FileContent name={"introduction"} label={"Giới thiệu"} className="mt-[50px]" />
        <FileContent name="description" label={"Đối tượng tham gia"} className="mt-[50px]" />
        <FileContent name="content" label={"Nội dung khoá học"} className="mt-[50px]" />
        <MultiFileInput
          handleChangeFile={handleChangeFile}
          defaultData={values.files}
          name={"files"}
        />

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

export default memo(UpdateCourseProgram);
