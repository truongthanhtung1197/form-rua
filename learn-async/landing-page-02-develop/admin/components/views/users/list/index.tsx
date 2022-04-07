import { FILTER_DEFAULT } from 'components/table/table.type';
import { ToastError } from 'utils/toast';
import { getColumns } from "./list.config";
import Api from "services/api";
import React, { memo, useEffect, useState } from "react";
import Table from "components/table";

const UsersTable = () => {

  const [users, setUsers] = useState<any>(null);
  const [filter, setFilter] = useState(FILTER_DEFAULT);

  useEffect(() => {
    getUsers();
  }, [filter]);

  const getUsers = async () => {
    try {
      const res: any = await Api.getUsers(filter);
      setUsers(res.data);
    } catch (error: any) {
      ToastError(error.message);
    }
  }

  const columns = getColumns({ filter: filter.filter })
  return (
    <>
      <Table
        columns={columns}
        data={users?.data}
        total={users?.total}
        name="USER"
        onChangePage={setFilter}
        filter={filter}
      />
    </>
  )
}

export default memo(UsersTable);