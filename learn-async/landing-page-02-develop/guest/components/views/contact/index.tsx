import { FORM_TYPE } from "constants/home.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { checkLastSubmitForm } from "utils/form";
import { mapPropsToValues, validationSchema } from "./contact.config";
import { withFormik } from "formik";
import Api from "services/api";
import FormContact from "./contact.form";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: (values: any, { resetForm }: { resetForm: any }) => {
    const postContact = async () => {
      try {
        const res = await Api.postContacts(values);
        if (checkApiStatus(res)) {
          ToastSuccess("Thông tin của bạn đã được gửi thành công");
          resetForm();
        } else {
          ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
        }
      } catch (e) {
        ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
      }
    };
    checkLastSubmitForm({ type: FORM_TYPE.CONTACT, request: postContact });
  },
});

export default MyEnhancedForm(FormContact);
