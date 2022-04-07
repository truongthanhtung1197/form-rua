import { Posts } from "components/views/sharing";
import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import React, { memo } from "react";
function Sharing() {
  return (
    <div className="px-10">
      <ContentHeader
        title={"Chia sẻ"}
        action={"Tạo mới"}
        actionLink={ROUTERS.POST_CREATE}
        searchHidden={false}
      >
        Bài viết
      </ContentHeader>
      <div className=" w-full">
        <Posts />
      </div>
    </div>
  );
}

export default memo(Sharing);
