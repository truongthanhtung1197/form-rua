import "react-quill/dist/quill.snow.css";
import { ErrorMessage, Field } from "formik";
import { formats, modules } from "./TextEditor.config";
import React, { memo } from "react";
import ReactQuill from "react-quill";

export const FileContent = ({ name, label, className }: any) => {
  return (
    <>
      <label className={`block text-2xl font-semibold ${className}`}>
        {label} <span className="text-red100 align-super">*</span>
      </label>
      <Field name={name}>
        {({ field }: any) => (
          <ReactQuill
            theme="snow"
            formats={formats}
            modules={modules}
            value={field.value}
            onChange={field.onChange(field.name)}
            className="bg-white h-[350px] pb-20 px-10 mt-4 rounded shadow-3xl"
          />
        )}
      </Field>
      <div className="pt-4 text-red100 font-medium italic">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default memo(FileContent);
