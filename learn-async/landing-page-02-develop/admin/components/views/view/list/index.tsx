import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumn } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";
function ViewTable() {
  const [news, setNews] = useState<any>([]);
  const [filter, setFilter] = useState({
    filter: {
      offset: 0,
      limit: 10,
      order: "newsAt DESC",
    },
  });
  const handleChangeFilter = (newFilter: any) => {
    setFilter(newFilter);
  };
  useEffect(() => {
    getNewspaper();
  }, [filter]);
  const getNewspaper = async () => {
    try {
      const res = await Api.getNewspaper(filter);
      if (checkApiStatus(res)) {
        setNews(res.data);
      }
    } catch (error) {}
  };

  const handleUpdateNewspaper = async (id: number, data: any) => {
    try {
      const res = await Api.updateNewspaper(id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật bài báo thành công");
        getNewspaper();
      }
    } catch (error: any) {
      ToastError(error?.messages);
    }
  };
  const handleDeleteNewspaper = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteNews(id) });
    },
    [filter]
  );
  const deleteNews = async (id: number) => {
    try {
      const res = await Api.deleteNewspaper(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá bài báo thành công");
        getNewspaper();
      }
    } catch (error: any) {
      ToastError(error.messages);
    }
  };
  const columns = getColumn({ handleUpdateNewspaper, handleDeleteNewspaper });
  return (
    <div className="w-full mx-auto px-10 container">
      <ContentHeader
        title={"Góc nhìn"}
        action={"Tạo mới"}
        actionLink={ROUTERS.VIEW_CREATE}
        searchHidden={false}
      >
        <p className="text-lg">Báo chí</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={news?.data}
        total={news?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(ViewTable);
