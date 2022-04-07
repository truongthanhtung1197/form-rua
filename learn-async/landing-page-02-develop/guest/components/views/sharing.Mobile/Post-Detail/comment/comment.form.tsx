import { ErrorMessage, Field } from "formik";
import CommentViews from "./comment.views";
import React, { memo } from "react";
function CommentForm(props: any) {
  const { handleSubmit } = props;
  return (
    <div>
      <section className="bg-gray100 px-4">
        <CommentViews />
        <form className="" onSubmit={handleSubmit}>
          <div className="lg:flex justify-between w-full lg:h-[114px] h-[228px] text-left">
            <div className="flex-1 lg:mr-[25px] h-[114px] mt-[10px]">
              <label className="text-lg ">
                Tên
                <span className="text-red1 align-super">*</span>
              </label>
              <Field
                type="text"
                name="name"
                className="h-[45px] outline-none border rounded-md text-[20px] px-[22px] w-full"
              />
              <p className="text-[16px] italic text-red">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="flex-1 lg:ml-[25px] h-[114px] mt-[-20px]">
              <label className="text-lg">
                Email
                <span className="text-red1 align-super">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="h-[45px] outline-none border rounded-md text-[20px] px-[22px] w-full"
              />
              <p className="text-[16px] italic text-red">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>
          <div className="h-[114px] mt-[-40px]">
            <p className="text-[20px]">Nội dung</p>
            <Field
              name="content"
              as="textarea"
              rows={3}
              className="w-full outline-none border rounded-md text-[20px] px-[5px]"
            />
            <p className="text-[16px] italic text-red">
              <ErrorMessage name="content" />
            </p>
          </div>
          <div className="text-left">
            {" "}
            <button
              className="w-[120px] h-[30px] text-black font-normal text-[14px] text-center mt-[37px] bg-gray500 rounded-md active:opacity-70"
              type="submit"
            >
              Gửi
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default memo(CommentForm);
