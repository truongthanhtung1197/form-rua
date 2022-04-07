import { AlertConfirm, ToastError, ToastSuccess } from "utils/toast";
import { VIDEO_STATUS } from "constants/galary.constants";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { getColumns } from "./video.config";
import Api from "services/api";
import React, { memo, useCallback, useEffect, useState } from "react";
import Table from "components/table";

function Index() {
  const [videos, setVideos] = useState<any>([]);
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
    const statusShow = { status: VIDEO_STATUS.SHOW };
    const statusHide = { status: VIDEO_STATUS.HIDE };
    try {
      const res: any = await Api.patchVideo(
        id,
        status === VIDEO_STATUS.SHOW ? statusHide : statusShow
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
  const handleDeleteVideo = useCallback((id: number) => {
    AlertConfirm({ onOk: () => onDelete(id) });
  }, []);
  const onDelete = async (id: number) => {
    try {
      const res: any = await Api.deleteVideo(id);
      if (checkApiStatus(res)) {
        ToastSuccess("Xoá Video thành công");
        getData();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  const columns: any = getColumns(changeStatus, handleDeleteVideo);
  useEffect(() => {
    getData();
  }, [filter]);
  const getData = async () => {
    try {
      const res: any = await Api.getVideos(filter);
      setVideos(res?.data);
    } catch (error: any) {
      ToastError(error?.message);
    }
  };
  return (
    <div>
      <Table
        columns={columns}
        data={videos?.data}
        total={videos?.total}
        name={"VIDEO"}
        onChangePage={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
}

export default memo(Index);
