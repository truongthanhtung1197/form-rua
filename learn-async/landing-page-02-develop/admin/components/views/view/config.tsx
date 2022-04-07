import * as yup from "yup";
import moment from "moment";
export const mapPropsToValues = (props: any) => {
  return {
    title: props?.defaultData?.title || "",
    content: props?.defaultData?.content || "",
    url: props?.defaultData?.url || "",
    author: props?.defaultData?.author || "",
    newspaper: props?.defaultData?.newspaper || "",
    type: props?.defaultData?.type || "MAIN",
    newsAt: moment(props?.defaultData?.newsAt).format("yyyy-MM-DD") || "",
    description: props?.defaultData?.description || "",
    status: props?.defaultData?.status || "HIDE",
    files: props?.defaultData?.mediaContent || "",
  };
};

export const validationSchema = yup.object().shape({
  title: yup.string().required("require"),
  content: yup.string().required("require"),
  url: yup.string().required("require"),
  author: yup.string().required("require"),
  newspaper: yup.string().required("require"),
  newsAt: yup.string().required("require"),
  description: yup.string().required("require"),
  status: yup.string().required("require"),
  files: yup.mixed().required("require"),
});
