import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateNewspaperForm from "./view";

interface IForm {
  title: string;
  content: string;
  url: string;
  author: string;
  newspaper: string;
  type: string;
  newsAt: string;
  description: string;
  status: string;
}
interface IValues {
  title: string;
  content: string;
  url: string;
  author: string;
  newspaper: string;
  type: string;
  newsAt: string;
  description: string;
  status: string;
  files: any;
}
export type IProps = FormikProps<IForm>;
const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IValues, formikBag: FormikBag<any, IValues>) => {
    const { router, id } = formikBag.props;
    const data = omit(["files"], { ...values, newsAt: new Date(values.newsAt).toISOString() });
    const formData = new FormData();
    formData.append("files", values.files);
    Swal.showLoading();
    try {
      const res: any = await Api.updateNewspaper(id, data);
      if (checkApiStatus(res)) {
        const result = await Api.uploadNewspaperImg(id, formData);
        if (checkApiStatus(result)) {
          ToastSuccess("Cập nhật bài báo thành công");
          router.back();
        }
      } else {
        ToastError(res.data.error.name);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(EnhanceForm(UpdateNewspaperForm));
