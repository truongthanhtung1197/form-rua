import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { getColumn } from "./registration.config";
import Api from "services/api";
import ContentHeader from "components/layouts/content-header";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

function RegistrationTable() {
  const [list, setList] = useState<any>([]);
  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: ["status DESC, createdAt DESC"],
      where: {},
    },
  });
  useEffect(() => {
    getRegistrationList();
  }, [filter]);
  const handleChangeFilter = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const getRegistrationList = async () => {
    try {
      const res = await Api.getRegistrationList(filter);
      if (checkApiStatus(res)) {
        const data = res.data;
        setList(data);
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const handleDelete = useCallback(
    (id: number) => {
      AlertConfirm({ onOk: () => deleteRegistration(id) });
    },
    [filter]
  );
  const deleteRegistration = async (id: number) => {
    try {
      const res = await Api.deleteRegistration(id);
      if (checkApiStatus(res)) {
        getRegistrationList();
        ToastSuccess("Xoá tin tức thành công!");
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  };

  const updateRegistrationStatus = async (id: number, newStatus: any) => {
    try {
      const data = { status: newStatus };
      const res = await Api.updateRegistrationStatus(id, data);
      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật trạng thái thành công");
        getRegistrationList();
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns = getColumn({ handleDelete, updateRegistrationStatus });
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={false}>
        <p className="text-lg">Đăng kí khoá học</p>
      </ContentHeader>
      <Table
        columns={columns}
        data={list?.data}
        total={list?.total}
        name={""}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(RegistrationTable);
