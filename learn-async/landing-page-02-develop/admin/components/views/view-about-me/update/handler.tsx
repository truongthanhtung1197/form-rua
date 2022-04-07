import { FormikBag, FormikProps, withFormik } from "formik";
import { REVIEW_ABOUT_ME } from "constants/review.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import ViewaboutmeForm from "./form";

interface IForm {
  reviewerName: string;
  reviewAt: string;
  content: string;
  fileList: any;
  avatar: any;
}

interface Ivalues {
  reviewerName: string;
  reviewAt: string;
  content: string;
  fileList: any;
  avatar: any;
}
export type IProps = FormikProps<IForm>;

const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, Ivalues>) => {
    const { router, id } = formikBag.props;
    const avatar = new FormData();
    avatar.append("avatar", values.avatar);
    const fileList = new FormData();
    Object.values(values.fileList).map((item: any) => {
      fileList.append("files", item);
    });
    const data = omit(["fileList, avatar"], {
      ...values,
      reviewAt: new Date(values.reviewAt).toISOString(),
      type: REVIEW_ABOUT_ME,
    });
    Swal.showLoading();
    try {
      const res: any = await Api.updateReview(id, data);
      if (checkApiStatus(res)) {
        const result1 = await Api.uploadReviewAvatar(id, avatar);
        const result2 = await Api.uploadReviewImg(id, fileList);
        if (checkApiStatus(result1) && checkApiStatus(result2)) {
          ToastSuccess("Cập nhật review thành công");
          router.back();
        }
      } else {
        ToastError(res.data.error.message);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});
export default withRouter(EnhanceForm(ViewaboutmeForm));
