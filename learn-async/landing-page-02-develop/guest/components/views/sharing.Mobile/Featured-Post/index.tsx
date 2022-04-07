import FeaturedList from "./Featured.list";
import React, { memo } from "react";

function FeaturedPost() {
  return (
    <div>
      <FeaturedList />
    </div>
  );
}

export default memo(FeaturedPost);
