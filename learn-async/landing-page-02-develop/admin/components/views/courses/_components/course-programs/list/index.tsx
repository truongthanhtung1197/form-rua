import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { ROUTERS } from "constants/router.constant";
import { checkApiStatus } from "utils/common";
import { getColumns } from "./list.configs";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

function CourseProgramTable() {
  const [courses, setCourses] = useState<any>(null);
  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: "createdAt DESC",
    },
  });

  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteCourseProgram(id) });
    },
    [filter]
  );
  useEffect(() => {
    getCourseProgram();
  }, [filter]);

  const getCourseProgram = async () => {
    try {
      const res: any = await Api.getCourseProgram(filter);
      if (checkApiStatus(res)) {
        const { data } = res;
        setCourses(data);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };
  const deleteCourseProgram = async (id: number) => {
    try {
      const res = await Api.deleteCourseProgram(id);
      if (checkApiStatus(res)) {
        getCourseProgram();
        ToastSuccess("Xoá tin tức thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const columns: any = getColumns({ handleDelete, filter });

  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader
        title={"Khoá học"}
        action={"Tạo mới"}
        actionLink={ROUTERS.COURSE_PROGRAM_CREATE}
        searchHidden={false}
      >
        <p className="text-lg">Các khoá học</p>
      </ContentHeader>

      <Table
        columns={columns}
        data={courses?.data}
        total={courses?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}
export default memo(CourseProgramTable);
