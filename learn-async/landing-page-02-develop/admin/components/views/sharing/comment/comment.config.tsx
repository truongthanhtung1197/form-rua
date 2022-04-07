import { STATUS_COMMENT } from "constants/Sharing.constant";
import { memo } from "react";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import LimitContent from "components/limitContent";
import moment from "moment";

const getColumns = (onChangeStatusComment: any, onDeleteComment: any) => {
  return [
    {
      Header: "STT",
      Cell: (props: any) => <div>{props.row.index + 1}</div>,
    },
    {
      Header: "Ngày",
      Cell: memo(function getDate(props: any) {
        const { original } = props?.row;
        const { createdAt } = original;

        return (
          <div className="grid gap-y-2">
            <div>
              <div>{moment(createdAt).format("DD/MM/YYYY")}</div>
            </div>
          </div>
        );
      }),
    },
    {
      Header: "Họ tên",
      accessor: "name",
    },
    {
      Header: "email",
      accessor: "email",
    },

    {
      Header: "Bài viết",
      accessor: "title",
    },
    {
      Header: "Nội Dung",
      Cell: memo(function contents(props: any) {
        const { original } = props?.row;
        const { content } = original;
        return (
          <div>
            <LimitContent content={content} />
          </div>
        );
      }),
    },
    {
      Header: "Hành động",
      Cell: memo(function action(props: any) {
        const { original } = props.row;
        const { id, status } = original;
        return (
          <div className="flex justify-center gap-3">
            <ChangeStatusButton
              onClick={() => {
                onChangeStatusComment(id, status);
              }}
              condition={status === STATUS_COMMENT.SHOW}
            />
            <DeleteButton
              onClick={() => {
                onDeleteComment(id);
              }}
            />
          </div>
        );
      }),
    },
  ];
};

export { getColumns };
