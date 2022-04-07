import { FormikBag, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import CourseProgramCreateForm from "./create.view";
import Swal from "sweetalert2";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const router = formikBag.props.router;
    const data = omit(["files"], values);
    const formData = new FormData();
    Object.values(values.files).map((item: any) => {
      formData.append("files", item);
    });
    Swal.showLoading();
    try {
      const res: any = await Api.createCourseProgram(data);
      if (checkApiStatus(res)) {
        try {
          const result = await Api.uploadCourseImg(res.data.id, formData);
          if (checkApiStatus(result)) {
            ToastSuccess("Tạo chương trình học thành công");
            router.back();
          } else {
            ToastError(getErrorMessage(res?.data?.error?.message));
          }
        } catch (error: any) {
          ToastError(error.message);
        }
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(CourseProgramCreateForm));
