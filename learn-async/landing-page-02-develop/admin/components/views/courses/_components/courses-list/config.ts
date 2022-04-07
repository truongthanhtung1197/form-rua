import * as yup from "yup";
import { COURSE_STATUS } from "constants/course.constant";

export const mapPropsToValues = (props: any) => {
  return {
    courseProgramId: props?.default?.courseProgramId || "",
    courseName: props?.defaultData?.courseName || "",
    openingDate: props?.defaultData?.openingDate || "",
    schedule: props?.defaultData?.schedule || "",
    time: props?.defaultData?.time || "",
    numberOfLessons: props?.defaultData?.numberOfLessons || "",
    teacher: props?.defaultData?.teacher || "",
    level: props?.defaultData?.level || "",
    fee: props?.defaultData?.fee || "",
    location: props?.defaultData?.location || "",
    status: props?.defaultData?.status || COURSE_STATUS.HIDE,
  };
};

export const validationSchema = yup.object().shape({
  courseName: yup.string().required("Required"),
  openingDate: yup.string().required("Required"),
  schedule: yup.string().required("Required"),
  time: yup.string().required("Required"),
  numberOfLessons: yup.string().required("Required"),
  teacher: yup.string().required("Required"),
  level: yup.string().required("Required"),
  fee: yup.string().required("Required"),
  location: yup.string().required("Required"),
});
