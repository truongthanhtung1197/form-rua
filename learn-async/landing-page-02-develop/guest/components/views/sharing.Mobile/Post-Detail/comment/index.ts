import { mapPropsToValues, validationSchema } from "./comment.config";
import { withFormik } from "formik";
import CommentForm from "./comment.form";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: () => {},
});
export default MyEnhancedForm(CommentForm);
