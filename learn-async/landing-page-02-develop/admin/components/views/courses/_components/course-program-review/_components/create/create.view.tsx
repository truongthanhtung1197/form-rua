import { FileContent, FileInput, MultiFileInput, TextInput } from "components/form";
import ContentHeader from "components/layouts/content-header";
import Icon from "styles/images/review";
import Image from "next/image";
import React, { memo } from "react";

function ReviewCreateForm(props: any) {
  const { handleSubmit, renderProgram, handleReset, setFieldValue } = props;
  const handleChangeFile = (values: any) => {
    setFieldValue("files", values);
  };
  const handleChangeAvatar = (values: any) => {
    setFieldValue("avatar", values);
  };

  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={false}>
        <div className="flex justify-start items-center gap-2">
          <p>Feedback học viên</p>
          <Image src={Icon.icon_edit} alt="" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Khoá học"} name={"courseProgramId"} component={"select"}>
          <option>Main</option>
          {renderProgram()}
        </TextInput>
        <TextInput label={"Tên học viên"} name={"reviewerName"} />
        <TextInput type={"date"} label={"Ngày"} name={"reviewAt"} />

        <FileContent name={"content"} label={"Nội dung"} className={"mt-14"} />
        <FileInput
          accept="image/*, image/HEIC"
          handleChangeFile={handleChangeAvatar}
          label={"Avatar"}
          buttonName={"Thêm ảnh"}
          idInput={"img"}
          name={"avatar"}
        />
        <MultiFileInput handleChangeFile={handleChangeFile} name={"files"} />

        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleReset} type="button">
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

export default memo(ReviewCreateForm);
