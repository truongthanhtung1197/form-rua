import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { FOUNDER_STATUS } from "./founder.constants";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./founder.config";
import Api from "services/api";
import React, { useCallback, useEffect, useState } from "react";
import Table from "components/table";

export default function FounderList() {
  const [founders, setFoundes] = useState<any>([]);
  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: ["createdAt DESC"],
    },
  });
  useEffect(() => {
    getFounders();
  }, [filter]);

  const getFounders = async () => {
    try {
      const res: any = await Api.getFounders(filter);
      if (checkApiStatus(res)) {
        setFoundes(res?.data);
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };

  const onChangePage = useCallback((newFilter: any) => {
    setFilter(newFilter);
  }, []);

  const onchangeStatus = async (id: number, status: string) => {
    const hideStatus = { status: "HIDE" };
    const ShowStatus = { status: "SHOW" };

    try {
      const res: any = await Api.patchFounder(
        id,
        status === FOUNDER_STATUS.SHOW ? hideStatus : ShowStatus
      );
      if (checkApiStatus(res)) {
        ToastSuccess("Thay đổi thành công");
        getFounders();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const onDeleteFounder = (id: number) => {
    AlertConfirm({ onOk: () => onDelete(id) });
  };
  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteFounderById(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá thành công"), getFounders();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns = getColumns(onchangeStatus, onDeleteFounder);

  return (
    <div>
      <Table
        columns={columns}
        data={founders?.data}
        total={founders?.total}
        name={"Founder"}
        onChangePage={onChangePage}
        filter={filter}
      />
    </div>
  );
}
