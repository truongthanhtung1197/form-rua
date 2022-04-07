import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import Api from "services/api";

export default async function handler(res: any) {
  try {
    const result = await Api.getCommentSharings();
    if (checkApiStatus(result)) {
      return res.status(200).json(result?.data);
    }
  } catch (error) {
    ToastError(getErrorMessage(res.error));
  }
}
