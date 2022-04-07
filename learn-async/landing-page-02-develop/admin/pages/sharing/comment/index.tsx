import { Comments } from "components/views/sharing";
import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import React, { memo } from "react";
function Comment() {
  return (
    <div className="mx-10 w-full">
      <ContentHeader
        title={"Chia sẻ"}
        action={"Tạo mới"}
        actionLink={ROUTERS.POST_CREATE}
        searchHidden={false}
      >
        Bài viết
      </ContentHeader>
      <div className="w-full">
        <Comments />
      </div>
    </div>
  );
}

export default memo(Comment);
