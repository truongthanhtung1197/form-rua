import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "./comment.config";
import { withFormik } from "formik";
import Api from "services/api";
import CommentForm from "./comment.form";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, { resetForm }: { resetForm: any }) => {
    try {
      const res = await Api.postCommentSharings(values);
      if (checkApiStatus(res)) {
        ToastSuccess("Thông tin của bạn đã được gửi thành công");
        resetForm();
      } else {
        ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
      }
    } catch (e) {
      ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
    }
  },
});

export default MyEnhancedForm(CommentForm);
