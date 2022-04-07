import PostView from "./post.view";
import React, { memo } from "react";

function Posts() {
  return (
    <div>
      <PostView />
    </div>
  );
}

export default memo(Posts);
