import { ROUTERS } from "constants/router.constant";
import { STATUS_POST } from "constants/Sharing.constant";
import { memo } from "react";
import { regexContent } from "utils/file";
import ChangeStatusButton from "components/button/changeStatusButton";
import DeleteButton from "components/button/deleteButton";
import EditButton from "components/button/editButton";
import LimitContent from "components/limitContent";
import moment from "moment";
import Image from "next/image";
const getColumns = (onChangeStatusPost: any, handleDelete: any) => {
  return [
    {
      Header: "STT",
      Cell: (props: any) => <div>{props.row.index + 1}</div>,
    },
    {
      Header: "Hình ảnh",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { mediaContent } = original;
        return (
          <div>
            {mediaContent && (
              <div>
                <Image src={mediaContent?.url} width={500} height={500} />
              </div>
            )}
          </div>
        );
      },
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
      Header: "Tiêu đề",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { title } = original;
        return (
          <div>
            <LimitContent content={title} />
          </div>
        );
      },
      style: {
        width: "30%",
      },
    },
    {
      Header: "Nội Dung",
      Cell: memo(function contents(props: any) {
        const { original } = props?.row;
        const { content } = original;
        return (
          <div>
            <LimitContent content={content.replace(regexContent, "")} />
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
                onChangeStatusPost(id, status);
              }}
              condition={status === STATUS_POST.SHOW}
            />
            <EditButton route={`${ROUTERS.POST_UPDATE}/${id}`} />
            <DeleteButton
              onClick={() => {
                handleDelete(id);
              }}
            />
          </div>
        );
      }),
    },
  ];
};

export { getColumns };
