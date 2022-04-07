import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { REVIEW_COURSE } from "constants/review.constants";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

function CourseReviewTable() {
  const [reviews, setReviews] = useState<any>([]);
  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: "reviewAt DESC",
      where: {
        type: REVIEW_COURSE,
      },
    },
  });

  useEffect(() => {
    getReviews();
  }, [filter]);
  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);
  const getReviews = async () => {
    try {
      const res = await Api.getReviews(filter);
      if (checkApiStatus(res)) {
        const { data } = res;
        setReviews(data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const handleDeleteReview = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteReview(id) });
    },
    [filter]
  );

  const deleteReview = async (id: number) => {
    try {
      const res = await Api.deleteReviews(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá feedback thành công");
        getReviews();
      }
    } catch (error) {}
  };

  const column = getColumns({ handleDeleteReview, filter });
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        searchHidden={false}
        action={"Tạo mới"}
        actionLink={ROUTERS.COURSE_REVIEW_CREATE}
      >
        <p className="text-lg">Feedback học viên</p>
      </ContentHeader>
      <Table
        columns={column}
        data={reviews?.data}
        total={reviews?.total}
        name={""}
        filter={filter}
        onChangePage={handleChangeFilter}
      />
    </div>
  );
}

export default memo(CourseReviewTable);
