import { ROUTERS } from "constants/router.constant";
import { memo } from "react";
import Image from "next/image";
import Images from "styles/images/table";
import Link from "next/link";
import moment from "moment";

export const getColumns = ({ filter }: { filter: any }) => {
  return [
    {
      Header: "STT",
      accessor: "stt",
      Cell: (props: any) => {
        const { index } = props?.row;
        return <div className="text-center">{index + filter?.offset + 1}</div>;
      },
    },
    {
      Header: "Tên đăng nhập",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { fullName } = original;
        return <div>{fullName}</div>;
      },
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Ngày tạo",
      Cell: memo(function getDate(props: any) {
        const { original } = props?.row;
        const { createdAt } = original;

        return <div>{moment(createdAt).format("DD/MM/YYYY")}</div>;
      }),
    },
    {
      Header: "Quyền hạn",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { roles } = original;
        return (
          <div>
            {roles.map((item: any, index: number) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
        );
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { original } = props?.row;
        const { id } = original;
        return (
          <Link href={`${ROUTERS.USER_UPDATE}/${id}`} passHref>
            <div className="flex justify-center gap-x-2">
              <button className="editButton flex justify-center items-center">
                <Image alt="deleteIcon" src={Images.editIcon} layout="intrinsic" />
              </button>
            </div>
          </Link>
        );
      },
      style: {
        width: 200,
      },
    },
  ];
};
