import * as yup from "yup";
import { POST_TYPE, STATUS_POST } from "constants/Sharing.constant";
import moment from "moment";

export const mapPropsToValues = (props: any) => {
  return {
    sharingAt: moment(props.defaultData?.sharingAt).format("YYYY-MM-DD") || "",
    title: props?.defaultData?.title || "",
    content: props?.defaultData?.content || "",
    status: props?.defaultData?.status == STATUS_POST.SHOW ? true : false,
    type: props?.defaultData?.type || POST_TYPE.NORMAL,
    slug: "string",
    filesPost: props?.defaultData?.mediaContents?.[0].url || null,
  };
};

export const validationSchema = yup.object().shape({
  title: yup.string().required("Required"),
  content: yup.string().required("Required"),
  filesPost: yup.mixed().required("Required"),
});
