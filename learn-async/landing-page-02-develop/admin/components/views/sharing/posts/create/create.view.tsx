import { POST_TYPE_OPTION } from "constants/Sharing.constant";
import { FileInput, Select, TagInput, TextInput } from "components/form";
import React, { memo } from "react";
import TextEditor from "components/form/text-editor";
import ContentHeader from "components/layouts/content-header";
import { Icons } from "styles/images/icons";
import Image from "next/image";
function CreatePostForm(props: any) {
  const { handleSubmit, values, setFieldValue, handleReset } = props;
  const handleChangeHide = () => {
    if (!values.status) return;
    setFieldValue("status", false);
  };
  const handleChangeShow = () => {
    if (values.status) return;
    setFieldValue("status", true);
  };
  const handleChangeTag = (value: string) => {
    setFieldValue("tag", value);
  };
  const handleChangeFile = (file: any) => {
    setFieldValue("filesPost", file);
  };
  return (
    <div className="w-full bg-gray-200 mr-28 px-20 pb-20">
      <form onSubmit={handleSubmit}>
        <ContentHeader title={"Góc nhìn"} searchHidden={false}>
          <div className="flex justify-start items-center gap-3">
            <p className="text-lg">Bài viết</p>
            <Image src={Icons.editIcon} alt="icon" />
          </div>
        </ContentHeader>
        <TextInput name="sharingAt" label="Ngày" />
        <TextInput name="title" label="Tiêu đề" />
        <TextEditor name="content" label="Nội dung" />
        <TagInput handleChangeTag={handleChangeTag} />
        <div className="flex flex-auto justify-between w-full">
          {" "}
          <FileInput
            handleChangeFile={handleChangeFile}
            label={"Ảnh đại diện"}
            buttonName={"Chọn ảnh"}
            idInput={"img"}
            name={"Post"}
          />{" "}
          <div className="flex w-full justify-end  ">
            <div className="w-2/5">
              <Select name="type" options={POST_TYPE_OPTION} label="Loại bài viết" />
              <div>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={values.status} onChange={handleChangeShow} />
                  <span className="pl-5">Hiện thị</span>
                </label>
                <label className="block mb-5 text-base font-semibold">
                  <input type="radio" checked={!values.status} onChange={handleChangeHide} />
                  <span className="pl-5">Ẩn</span>
                </label>
              </div>
              <div className="flex gap-[25px]">
                <button className="btn-cancel" onClick={handleReset}>
                  Huỷ
                </button>
                <button type="submit" className="btn-upload">
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(CreatePostForm);
