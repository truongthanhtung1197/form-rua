import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import Api from "services/api";

export default async function handler(req: any, res: any) {
  const id = req.query.id;
  try {
    const result: any = await Api.getCourseProgramById(id);
    if (checkApiStatus(result)) {
      return res.status(200).json(result?.data);
    }
  } catch (error) {
    ToastError(getErrorMessage(res.error));
  }
}
