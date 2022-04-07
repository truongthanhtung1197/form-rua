import * as yup from "yup";

export const mapPropsToValues = () => {
  return {
    name: "",
    phone: "",
    email: "",
    course: "",
  };
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  phone: yup.number().required("Required"),
  email: yup.string().email("Invalid email!").required("Required"),
  course: yup.string().required("Required"),
});
