import { FOUNDER_STATUS } from "constants/founder.constants";
import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import Api from "services/api";
import FormUploadVideo from "./create.view";
import React, { memo, useState } from "react";

function Index() {
  const [data, setData] = useState({
    file: null,
    status: FOUNDER_STATUS.HIDE,
  });

  const onSubmit = async (setError: Function) => {
    if (data.file === null) {
      setError(true);
    } else {
      try {
        const fileData = {
          status: data.status,
        };
        const res: any = await Api.createImage(fileData);
        if (checkApiStatus(res)) {
          // const formData = new FormData();
        }
      } catch (error: any) {
        ToastError(error.message);
      }
    }
  };
  return <FormUploadVideo onSubmit={onSubmit} setData={setData} data={data} />;
}

export default memo(Index);
