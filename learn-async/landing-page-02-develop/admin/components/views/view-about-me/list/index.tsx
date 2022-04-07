import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { REVIEW_ABOUT_ME } from "constants/review.constants";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Table from "components/table";

function ViewAboutMeTable() {
  const [data, setData] = useState<any>({});
  const [filter, setFilter] = useState({
    filter: {
      offset: 0,
      limit: 10,
      order: "reviewAt DESC",
      where: {
        type: REVIEW_ABOUT_ME,
      },
      include: [
        {
          relation: "mediaContents",
        },
      ],
    },
  });
  useEffect(() => {
    getReview();
  }, [filter]);
  const handleChangeFilter = (newFilter: any) => {
    setFilter(newFilter);
  };
  const getReview = async () => {
    try {
      const res = await Api.getReviews(filter);
      if (checkApiStatus(res)) {
        setData(res.data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const deleteReview = async (id: number) => {
    try {
      const res: any = await Api.deleteReviews(id);
      Swal.showLoading();
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá bài viết thành công");
        getReview();
      } else {
        ToastError(res.data.error.name);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteReview(id) });
    },
    [filter]
  );
  const columns = getColumns({ handleDelete, filter });
  return (
    <div className="w-full mx-auto container px-10">
      <ContentHeader
        title={"Góc nhìn"}
        action={"Tạo mới"}
        actionLink={ROUTERS.VIEW_ABOUT_ME_CREATE}
        searchHidden={false}
      >
        <p className="text-lg">Góc nhìn về tôi</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={data?.data}
        total={data?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(ViewAboutMeTable);
