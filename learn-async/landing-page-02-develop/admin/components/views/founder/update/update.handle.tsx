import { FormikBag, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues } from "components/views/founder/create/create.config";
import { withRouter } from "next/router";
import Api from "services/api";
import FormUpdate from "./update.view";
import Swal from "sweetalert2";

interface IForm {
  branding: string;
  content: string;
  logoImg: null;
  fileAvatar: null;
  url: string;
}
const MyEnhancedForm = withFormik({
  mapPropsToValues,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IForm>) => {
    Swal.showLoading();
    const { defaultData } = formikBag.props;
    const data = {
      branding: values.branding,
      content: values.content,
      url: values.url,
    };
    // const formLogo: any = new FormData();
    // const fileLogo: any = values.logoImg;
    // formLogo.append("logoImg", fileLogo);

    // const formAvatar: any = new FormData();
    // const fileAvatar: any = values.fileAvatar;
    // formAvatar.append("formAvatar", fileAvatar);

    try {
      const res: any = await Api.patchFounder(defaultData?.id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Chỉnh sửa founder thành công");
        formikBag?.props?.router?.back();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }

      // if (checkApiStatus(res)) {
      //   const res1: any = await Api.postFounderImg(
      //     res?.data?.id,
      //     formLogo,
      //     SOURCE_TYPES.FOUNDER_LOGO
      //   );

      //   const res2: any = await Api.postFounderImg(res?.data?.id, formAvatar, SOURCE_TYPES.FOUNDER);
      //   if (checkApiStatus(res1) && checkApiStatus(res2)) {
      //     ToastSuccess("Tạo founder thành công");
      //     formikBag?.props?.router?.back();
      //   }
      // } else {
      //   ToastError(getErrorMessage(res?.data?.error?.message));
      // }
    } catch (error: any) {
      ToastError(error?.message);
    }
  },
});

export default withRouter(MyEnhancedForm(FormUpdate));
