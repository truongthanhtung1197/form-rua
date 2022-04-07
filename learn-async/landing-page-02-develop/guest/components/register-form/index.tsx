import { FormikProps, withFormik } from "formik";
import { mapPropsToValues, validationSchema } from "./form.config";
import RegisterForm from "./form.view";

interface IForm {
  name: string;
  phone: number;
  email: string;
  course: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: () => {},
});

export default MyEnhancedForm(RegisterForm);
