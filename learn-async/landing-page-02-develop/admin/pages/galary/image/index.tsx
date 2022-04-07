import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import ListImage from "components/views/galary/image";
import React from "react";

function Index() {
  return (
    <div className="bg-graydivide w-full">
      <div className="mx-auto container px-10">
        <ContentHeader
          title={"Galary"}
          action={"Tạo mới"}
          actionLink={ROUTERS.IMAGE_CREATE}
          searchHidden={false}
        >
          <div>Hình ảnh</div>
        </ContentHeader>
        <ListImage />
      </div>
    </div>
  );
}

export default Index;
