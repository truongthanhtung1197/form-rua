import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import React from "react";
import UserPage from "components/views/users/list";

const User = () => {
  return (
    <div className="w-full px-10 bg-graydivide">
      <ContentHeader
        title={"Admin"}
        action={"Tạo mới"}
        actionLink={ROUTERS.USERS_CREATE}
        searchHidden={false}
      >
        <div>Danh sách</div>
      </ContentHeader>
      <UserPage />
    </div>
  );
};

export default User;
