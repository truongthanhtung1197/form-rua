import * as yup from "yup";

export const mapPropsToValues = (props: any) => {
  return {
    introduction: props?.defaultData?.introduction || "",
    description: props?.defaultData?.description || "",
    content: props?.defaultData?.content || "",
    name: props?.defaultData?.name || "",
    files: props?.defaultData?.mediaContents || "",
  };
};

export const validationSchema = yup.object().shape({
  introduction: yup.string().required("Required"),
  description: yup.string().required("Required"),
  content: yup.string().required("Required"),
  name: yup.string().required("Required"),
  files: yup.mixed().required("Required"),
});
