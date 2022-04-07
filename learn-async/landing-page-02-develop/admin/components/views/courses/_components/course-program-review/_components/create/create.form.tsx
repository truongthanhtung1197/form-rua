import { FormikBag, FormikProps, withFormik } from "formik";
import { REVIEW_COURSE } from "constants/review.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import ReviewCreateForm from "./create.view";
import Swal from "sweetalert2";

interface IForm {
  courseProgramId: string;
  reviewerName: string;
  content: string;
  reviewAt: string;
  files: any;
  avatar: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IForm>) => {
    const { router } = formikBag.props;
    const data = omit(["files", "avatar"], {
      ...values,
      reviewAt: new Date(values.reviewAt).toISOString(),
      courseProgramId: Number(values.courseProgramId),
      type: REVIEW_COURSE,
    });
    const avatar = new FormData();
    avatar.append("avatar", values.avatar);
    const files = new FormData();
    Object.values(values.files).map((item: any) => {
      files.append("files", item);
    });
    Swal.showLoading();
    try {
      const res: any = await Api.createReview(data);
      if (checkApiStatus(res)) {
        const result: any = await Api.uploadReviewAvatar(res?.data?.id, avatar);
        const result2: any = await Api.uploadReviewImg(res?.data.id, files);
        if (checkApiStatus(result) && checkApiStatus(result2)) {
          ToastSuccess("Tạo feedback thành công");
          router.back();
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

export default withRouter(MyEnhancedForm(ReviewCreateForm));
