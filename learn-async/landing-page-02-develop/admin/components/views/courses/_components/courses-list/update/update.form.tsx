import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateForm from "./update.view";

interface IForm {
  courseProgramId: number;
  courseName: string;
  openingDate: string;
  schedule: string;
  time: string;
  numberOfLessons: number;
  teacher: string;
  level: string;
  fee: string;
  location: string;
}

interface IValues {
  courseProgramId: number;
  courseName: string;
  openingDate: string;
  schedule: string;
  time: string;
  numberOfLessons: string;
  teacher: string;
  level: string;
  fee: string;
  location: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IValues, formikBag: FormikBag<any, IValues>) => {
    Swal.showLoading();
    const { defaultData } = formikBag.props;
    const data = values;
    try {
      const res: any = await Api.updateCourse(defaultData.id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật khoá học thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default MyEnhancedForm(UpdateForm);
