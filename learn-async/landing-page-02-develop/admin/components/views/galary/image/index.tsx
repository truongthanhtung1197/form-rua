import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { IMAGE_STATUS } from "constants/galary.constants";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./image.config";
import Api from "services/api";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

function Index() {
  const [images, setImage] = useState<any>([]);
  const [filter, setFilter] = useState({
    filter: {
      limit: 10,
      offset: 0,
      order: ["createdAt DESC"],
    },
  });

  const handleChangeFilter = (NewFilter: any) => {
    setFilter(NewFilter);
  };
  const changeStatus = async (id: number, status: string) => {
    const statusShow = { status: IMAGE_STATUS.SHOW };
    const statusHide = { status: IMAGE_STATUS.HIDE };
    try {
      const res: any = await Api.patchImage(
        id,
        status === IMAGE_STATUS.SHOW ? statusHide : statusShow
      );
      if (checkApiStatus(res)) {
        ToastSuccess("Thay đổi trạng thái thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const handleDeleteImage = useCallback((id: number) => {
    AlertConfirm({ onOk: () => onDelete(id) });
  }, []);
  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteImage(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá hình ảnh thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns: any = getColumns(changeStatus, handleDeleteImage);
  useEffect(() => {
    getData();
  }, [filter]);
  const getData = async () => {
    try {
      const res: any = await Api.getImages(filter);
      setImage(res?.data);
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  return (
    <div>
      <Table
        columns={columns}
        data={images?.data}
        total={images?.total}
        name={"HÌNH ẢNH"}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Index);
