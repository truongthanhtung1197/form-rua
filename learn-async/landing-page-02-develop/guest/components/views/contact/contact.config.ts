import * as yup from "yup";

export const mapPropsToValues = () => {
  return {
    fullName: "",
    email: "",
    topic: "",
    content: "",
  };
};

export const validationSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("Must be a valid email").required("Required"),
  topic: yup.string().required("Required"),
  content: yup.string().required("Required"),
});