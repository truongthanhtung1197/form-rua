import { DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatContent } from "utils/file";
import Image from "next/image";
import LimitContent from "components/limitContent";
import Link from "next/link";
export const getColumns = ({ handleDelete, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1} </div>;
      },
      style: {
        width: "5%",
      },
    },
    {
      Header: "Hình ảnh",
      Cell: ({ cell }: any) => {
        const { mediaContents } = cell.row.original;
        const { url, urlBlur } = mediaContents?.[0] || {};

        return (
          <div className="relative w-full aspect-w-3 aspect-h-2">
            {url && (
              <Image
                src={url}
                placeholder="blur"
                blurDataURL={urlBlur}
                alt="DXP"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            )}
          </div>
        );
      },
      style: {
        width: "10%",
      },
    },

    {
      Header: "Tên chương trình",
      Cell: ({ cell }: any) => {
        const { name, id } = cell.row.original;
        return (
          <Link href={`${ROUTERS.COURSE_LIST}/${id}/${name}`}>
            <a className="text-bluebtn underline">{name}</a>
          </Link>
        );
      },
      style: {
        width: "15%",
      },
    },

    {
      Header: "Giới thiệu",
      Cell: ({ cell }: any) => {
        const { introduction }: any = cell.row.original;
        return (
          <>
            <LimitContent content={formatContent(introduction)} />
          </>
        );
      },
      style: {
        width: "40%",
      },
    },
    {
      Header: "Số lượng khoá học",
      accessor: "numberOfCourses",
      style: {
        width: "10%",
      },
    },
    {
      Header: "Hành động",
      Cell: ({ cell }: any) => {
        const { id } = cell.row.original;

        return (
          <div className="justify-center flex gap-3">
            <EditButton route={`${ROUTERS.COURSE_PROGRAM_UPDATE}/${id}`} />
            <DeleteButton onClick={() => handleDelete(id)} />
          </div>
        );
      },
      style: {
        width: "20%",
      },
    },
  ];
};
