import * as yup from "yup";
import moment from "moment";

export const mapPropsToValues = (props: any) => {
  return {
    courseProgramId: props?.defaultData?.courseProgramId || "",
    reviewerName: props?.defaultData?.reviewerName || "",
    reviewAt: moment(props?.defaultData?.reviewAt).format("yyyy-MM-DD") || "",
    content: props?.defaultData?.content || "",
    files: props?.defaultData?.mediaContents?.[0] || "",
    avatar: props?.defaultData?.ownerAvatar || "",
  };
};

export const validationSchema = yup.object().shape({
  courseProgramId: yup.string().required("Required"),
  reviewerName: yup.string().required("Required"),
  reviewAt: yup.string().required("Required"),
  content: yup.string().required("Required"),
  files: yup.mixed().required("Required"),
  avatar: yup.mixed().required("Required"),
});
