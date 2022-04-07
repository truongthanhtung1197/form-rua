import { FileContent, FileInput, Select, TextInput } from "components/form";
import { Icons } from "styles/images/icons";
import { VIEW_TYPE_OPTION } from "constants/view.constant";
import ContentHeader from "components/layouts/content-header";
import Image from "next/image";
import React, { memo } from "react";

function UpdateNewspaperForm(props: any) {
  const { handleSubmit, setFieldValue, values } = props;
  const handleChangeFile = (file: any) => {
    setFieldValue("files", file);
  };

  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader title={"Góc nhìn"} searchHidden={true}>
        <div className="flex justify-start items-center gap-3">
          <p>Báo chí</p>
          <Image src={Icons.editIcon} alt="icon" />
        </div>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInput label={"Báo"} name={"newspaper"} />
        <TextInput label={"Ngày"} name={"newsAt"} type="date" defaultValue={values.newsAt} />
        <TextInput label={"Người viết"} name={"author"} />
        <TextInput label={"Link báo"} name={"url"} as="textarea" rows={3} />
        <TextInput label={"Tiêu đề"} name={"title"} as="textarea" rows={3} />
        <TextInput label={"Mô tả"} name={"description"} as="textarea" rows={3} />
        <FileContent label={"Nội dung"} name={"content"} />
        <div className="flex justify-between items-start mt-9">
          <div className="w-2/5">
            <FileInput
              imgDefault={values.files}
              name="files"
              handleChangeFile={handleChangeFile}
              label={"Ảnh đại diện"}
              buttonName={"Chọn ảnh"}
              idInput={"img"}
            />
          </div>
          <div className="w-1/3">
            <Select name={"type"} options={VIEW_TYPE_OPTION} label={"Loại bài viết"} />
            <div className="flex justify-start items-center gap-4 mt-[30px]">
              <input
                type="radio"
                name="status"
                value={"HIDE"}
                checked={values.status === "SHOW" ? false : true}
                onClick={() => setFieldValue("status", "HIDE")}
              />
              <label className="font-semibold text-lg">Ẩn</label>
            </div>
            <div className="flex justify-start items-center gap-4 mt-5">
              <input
                type="radio"
                name="status"
                value={"SHOW"}
                checked={values.status === "SHOW" ? true : false}
                onClick={() => setFieldValue("status", "SHOW")}
              />
              <label className="font-semibold text-lg">Hiện</label>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel">Huỷ</button>
          <button className="btn-upload" type="submit">
            Hoàn thành
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(UpdateNewspaperForm);
