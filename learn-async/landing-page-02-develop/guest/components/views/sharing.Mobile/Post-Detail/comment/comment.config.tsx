import * as yup from "yup";

export const mapPropsToValues = () => {
  return {
    name: "",
    email: "",
    content: "",
  };
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Must be a valid email").required("Required"),
  content: yup.string().required("Required"),
});
