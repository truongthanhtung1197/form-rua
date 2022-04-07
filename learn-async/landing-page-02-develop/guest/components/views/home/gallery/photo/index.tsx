import PhotoView from "./photo.view";
import React, { memo } from "react";
function PhotoGallery() {
  return (
    <>
      <PhotoView />
    </>
  );
}

export default memo(PhotoGallery);
