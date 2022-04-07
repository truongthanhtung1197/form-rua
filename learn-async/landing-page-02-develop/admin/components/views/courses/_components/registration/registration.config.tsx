import { CONTACT_ITEMS } from "constants/contact.constants";
import { ComboBox, DeleteButton } from "components/button";
import { formatDate } from "utils/file";

export const getColumn = ({ handleDelete, updateRegistrationStatus }: any) => {
  return [
    {
      Header: "STT",
      Cell: ({ cell }: any) => {
        return <div>{cell.row.index + 1}</div>;
      },
    },
    {
      Header: "Ngày ĐK",
      accessor: "createdAt",
      Cell: (props: any) => {
        const { createdAt } = props.row.original;
        return <div>{formatDate(createdAt)}</div>;
      },
    },
    {
      Header: "Họ tên",
      accessor: "fullName",
    },

    {
      Header: "Điện thoại",
      accessor: "phoneNumber",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Khoá học quan tâm",
      accessor: "course",
    },
    {
      Header: "Trạng thái",
      Cell: (props: any) => {
        const { id, status } = props.row.original;
        return (
          <ComboBox
            id={id}
            onChangeStatus={updateRegistrationStatus}
            status={status}
            listItems={CONTACT_ITEMS}
          />
        );
      },
    },
    {
      Header: "Hành động",
      Cell: (props: any) => {
        const { id } = props.row.original;
        return (
          <div className="justify-center flex items-center">
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
