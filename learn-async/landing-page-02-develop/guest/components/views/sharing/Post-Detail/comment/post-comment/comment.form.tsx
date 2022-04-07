import { ErrorMessage, Field } from "formik";
import CommentViews from "../comment.views";
import React, { memo } from "react";
function CommentForm(props: any) {
  const { handleSubmit } = props;

  return (
    <section className="bg-gray100">
      <CommentViews />
      <form className="" onSubmit={handleSubmit}>
        <div className="lg:flex justify-between w-full lg:h-[114px] h-[228px]">
          <div className="flex-1 lg:mr-[25px] h-[114px]">
            <label className="text-lg">
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
          <div className="flex-1 lg:ml-[25px] h-[114px]">
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
        <div className="h-[114px]">
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
        <button
          className="w-[160px] h-[45px] text-black font-semibold text-[18px] lg:text-[20px] mt-[94px] bg-gray500 rounded-md active:opacity-70"
          type="submit"
        >
          GỬI
        </button>
      </form>
    </section>
  );
}

export default memo(CommentForm);
