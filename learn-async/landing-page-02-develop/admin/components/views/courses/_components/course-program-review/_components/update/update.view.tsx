import { FileContent, FileInput, MultiFileInput, TextInput } from "components/form";
import { useRouter } from "next/router";
import React, { memo } from "react";

function ReviewUpdateForm(props: any) {
  const { handleSubmit, renderProgram, values, setFieldValue } = props;
  const router = useRouter();
  const handleChangeFile = (values: any) => {
    setFieldValue("files", values);
  };
  const handleChangeAvatar = (values: any) => {
    setFieldValue("avatar", values);
  };

  return (
    <div className="w-full px-10 mx-auto container">
      <form onSubmit={handleSubmit}>
        <TextInput
          label={"Khoá học"}
          name={"courseProgramId"}
          defaultValue={values.courseProgramId}
          component={"select"}
        >
          {renderProgram()}
        </TextInput>
        <TextInput label={"Tên học viên"} name={"reviewerName"} />
        <TextInput type={"date"} label={"Ngày"} name={"reviewAt"} defaultValue={values.reviewAt} />
        <FileContent name={"content"} label={"Nội dung"} className={"mt-14"} />
        <FileInput
          accept="image/*, image/HEIC"
          handleChangeFile={handleChangeAvatar}
          label={"Avatar"}
          buttonName={"Thêm ảnh"}
          idInput={"img"}
          name={"avatar"}
          imgDefault={values.avatar}
        />
        <MultiFileInput handleChangeFile={handleChangeFile} name={"files"} />
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={() => router.back()} type="button">
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(ReviewUpdateForm);
