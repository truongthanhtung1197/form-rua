import { ErrorMessage, Field } from "formik";
import React, { memo } from "react";
interface ITextInput {
  label: string;
  name: string;
}
function TextInput({ label, name }: ITextInput) {
  return (
    <>
      <label className="text-lg font-normal">
        {label}
        <span className="text-red1 align-super">*</span>
      </label>
      <Field
        name={name}
        type="text"
        placeholder="Nhập thông tin"
        className="w-full h-10 pl-5 text-lg rounded-lg focus:outline-none border border-black border-solid"
      />
      <div className="pt-4 italic font-medium text-red1">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default memo(TextInput);
