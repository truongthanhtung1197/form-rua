import { FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "./create.config";
import Api from "services/api";
import CreateNewsForm from "./create.view";
import Router from "next/router";
import Swal from "sweetalert2";

interface IForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  roles: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any) => {
    Swal.showLoading();

    const data = {
      fullName: values.firstName,
      password: values.password,
      email: values.email,
      roles: [`${values.roles}`],
    };
    try {
      const res = await Api.postUser(data);
      checkApiStatus(res) ? ToastSuccess("Create success") : ToastError("Create fail");
      Router.push("/users");
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default MyEnhancedForm(CreateNewsForm);
