import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import ListVideo from "components/views/galary/video";
import React from "react";

function Index() {
  return (
    <div className="bg-graydivide w-full">
      <div className="mx-auto container px-10">
        <ContentHeader
          title={"Galary"}
          action={"Tạo mới"}
          actionLink={ROUTERS.VIDEO_CREATE}
          searchHidden={false}
        >
          <div>Video</div>
        </ContentHeader>
        <ListVideo />
      </div>
    </div>
  );
}

export default Index;
