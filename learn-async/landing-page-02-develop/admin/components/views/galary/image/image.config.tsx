import { IMAGE_STATUS } from "constants/galary.constants";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import moment from "moment";

export const getColumns = (changeStatus: any, deleteImage: any) => {
  return [
    {
      Header: "STT",
      Cell: (props: any) => {
        const { index } = props?.row;
        return <div>{index + 1}</div>;
      },
    },
    {
      Header: "Video",
      accessor: "videoUrl",
    },
    {
      Header: "Tên",
      accessor: "name",
    },
    {
      Header: "Ngày tạo",
      Cell: (props: any) => {
        const { createdAt } = props?.row?.original;

        return <div>{moment(createdAt).format("DD-MM-YYYY")}</div>;
      },
    },
    {
      Header: "Kích thước",
      accessor: "size",
    },
    {
      Header: "Loại",
      accessor: "type",
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { id, status } = props?.row?.original;
        return (
          <div className="flex justify-center gap-4">
            <ChangeStatusButton
              onClick={() => changeStatus(id, status)}
              condition={status === IMAGE_STATUS.SHOW ? true : false}
            />
            <DeleteButton onClick={() => deleteImage(id)} />
          </div>
        );
      },
    },
  ];
};
