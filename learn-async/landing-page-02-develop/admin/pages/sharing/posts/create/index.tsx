import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import CreatePost from "components/views/sharing/posts/create";
import React, { memo } from "react";
function CreatePosts() {
  return (
    <div className="w-full">
      <div className="w-full">
        <CreatePost />
      </div>
    </div>
  );
}

export default memo(CreatePosts);
