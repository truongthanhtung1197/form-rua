import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateCourseProgram from "./update.form";

interface IForm {
  courseName: string;
  introduction: string;
  description: string;
  content: string;
  files: any;
}

interface IValues {
  name: string;
  introduction: string;
  description: string;
  content: string;
  files: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IValues>) => {
    Swal.showLoading();
    const { defaultData } = formikBag.props;
    const data = omit(["files", values]);
    const formData = new FormData();
    Object.values(values.files).map((item: any) => {
      formData.append("files", item);
    });

    try {
      const res: any = await Api.updateCourseProgram(defaultData.id, data);
      if (checkApiStatus(res)) {
        const result = await Api.uploadCourseImg(res.data.id, formData);
        if (checkApiStatus(result)) {
          ToastSuccess("Cập nhật chương trình học thành công!");
        } else {
          ToastError(getErrorMessage(res?.data?.error?.message));
        }
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(UpdateCourseProgram));
