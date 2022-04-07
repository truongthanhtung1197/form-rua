import { FormikBag, FormikProps, withFormik } from "formik";
import { REVIEW_COURSE } from "constants/review.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import ReviewUpdateForm from "./update.view";
import Swal from "sweetalert2";

interface IForm {
  courseProgramId: number;
  reviewerName: string;
  content: string;
  reviewAt: string;
  avatar: any;
  files: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, IForm>) => {
    Swal.showLoading();
    const { defaultData } = formikBag.props;
    const { id } = defaultData;
    const avatar = new FormData();
    avatar.append("avatar", values.avatar);
    const files = new FormData();
    Object.values(values.files).map((item: any) => {
      files.append("files", item);
    });
    const data = omit(["files", "avatar"], {
      ...values,
      reviewAt: new Date(values.reviewAt).toISOString(),
      courseProgramId: Number(values.courseProgramId),
      type: REVIEW_COURSE,
    });
    try {
      const res: any = await Api.updateReview(id, data);
      if (checkApiStatus(res)) {
        const result: any = await Api.uploadReviewAvatar(id, avatar);
        const result2: any = await Api.uploadReviewImg(id, files);
        if (checkApiStatus(result) && checkApiStatus(result2)) {
          ToastSuccess("Cập nhật review thành công");
        } else {
          ToastError(getErrorMessage(result?.data?.error?.message));
        }
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(ReviewUpdateForm));
