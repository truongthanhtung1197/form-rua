import * as Yup from "yup";
import moment from "moment";

export const mapPropsToValues = (props: any) => {
  return {
    reviewerName: props?.defaultData?.reviewerName || "",
    reviewAt: moment(props?.defaultData?.reviewAt).format("yyyy-MM-DD") || "",
    content: props?.defaultData?.content || "",
    avatar: props.defaultData?.files || "",
    fileList: props.defaultData?.fileList || "",
  };
};

export const validationSchema = Yup.object().shape({
  reviewerName: Yup.string().required("require"),
  reviewAt: Yup.string().required("require"),
  content: Yup.string().required("require"),
  avatar: Yup.mixed().required("require"),
  fileList: Yup.mixed().required("require"),
});
