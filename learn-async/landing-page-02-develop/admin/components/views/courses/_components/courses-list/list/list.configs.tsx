import { COURSE_STATUS } from "constants/course.constant";
import { ChangeStatusButton, DeleteButton, EditButton } from "components/button";
import { ROUTERS } from "constants/router.constant";
import { formatDate } from "utils/file";

export const getColumns = ({ handleDelete, updateCourse, filter }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + filter?.filter?.offset + 1}</div>;
      },
    },

    {
      Header: "Các khoá học",
      accessor: "courseName",
    },
    {
      Header: "Khai giảng",
      Cell: (props: any) => {
        const { openingDate } = props.row.original;
        return <div className="text-lg">{formatDate(openingDate)}</div>;
      },
    },
    {
      Header: "Giờ học",
      accessor: "time",
    },
    {
      Header: "Số buổi",
      accessor: "numberOfLessons",
    },

    {
      Header: "Học phí",
      accessor: "fee",
    },
    {
      Header: "Hành động",
      Cell: ({ cell }: any) => {
        const { id, status } = cell.row.original;
        const handleUpdateStatus = () => {
          const data = {
            status: `${
              status === COURSE_STATUS.HIDE || status === null
                ? COURSE_STATUS.SHOW
                : COURSE_STATUS.HIDE
            }`,
          };
          updateCourse(id, data);
        };

        return (
          <div className="justify-center flex gap-3">
            <ChangeStatusButton
              onClick={handleUpdateStatus}
              condition={status === COURSE_STATUS.SHOW}
            />
            <EditButton route={`${ROUTERS.COURSE_UPDATE}/${id}`} />
            <DeleteButton onClick={() => handleDelete(id)} />
          </div>
        );
      },
      style: {
        width: 200,
      },
    },
  ];
};
