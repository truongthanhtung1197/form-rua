import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";

export default function Editor({ content }: { content: string }) {
  return (
    <div>
      <ReactQuill theme="snow" defaultValue={content} readOnly className="hide-toolbar" />
    </div>
  );
}
