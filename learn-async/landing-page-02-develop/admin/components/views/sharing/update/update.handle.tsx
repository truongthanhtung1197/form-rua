import { FormikBag, FormikProps, withFormik } from "formik";
import { POST_TYPE, STATUS_POST } from "../../../../constants/Sharing.constant";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../posts/create/create.config";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdatePostForm from "./update.view";

interface IForm {
  sharingAt: string;
  title: string;
  content: string;
  status: boolean;
  type: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const { defaultData } = formikBag.props;
    const { router } = formikBag.props;
    Swal.showLoading();
    const data = {
      title: values.title,
      content: values.content,
      slug: values.slug,
      status: values.status ? STATUS_POST.SHOW : STATUS_POST.HIDE,
      type: values.type || POST_TYPE.NORMAL,
    };
    try {
      const res: any = await Api.updatePostSharing(defaultData?.id, data);

      if (checkApiStatus(res)) {
        ToastSuccess("Tạo tin tức thành công");
        router.back();
      } else {
        ToastError(getErrorMessage("Tạo tin tức thất bại"));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(UpdatePostForm));
