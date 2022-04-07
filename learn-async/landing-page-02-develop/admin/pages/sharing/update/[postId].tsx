import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import React, { memo } from "react";
import UpdatePost from "components/views/sharing/update";
function UpdateSharing() {
  return (
    <div className="w-full">
      <div className="w-full">
        <UpdatePost />
      </div>
    </div>
  );
}

export default memo(UpdateSharing);
