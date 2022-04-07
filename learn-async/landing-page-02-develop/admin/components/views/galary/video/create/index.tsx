import FormUploadVideo from "./create.view";
import React, { memo, useState } from "react";

function Index() {
  const [data, setData] = useState({
    file: null,
    status: "HIDE",
  });

  const onSubmit = async (setError: Function) => {
    if (data.file === null) {
      setError(true);
    } else {
      // const res: any = await Api.createVideo(data)
    }
  };
  return <FormUploadVideo onSubmit={onSubmit} setData={setData} data={data} />;
}

export default memo(Index);
