import dynamic from "next/dynamic";

export const EditorDynamic = dynamic(
  () => import("components/views/course-detail/_components/editor"),
  {
    ssr: false,
  }
);
