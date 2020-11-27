import React from "react";
import TableComponent from "../../components/UI/Table/TableComponent";
import {getData, headerList} from "./data";
import {useUsersList} from "../../services/user.service";

const AdminPage = (props) => {

    const { usersList, isLoading } = useUsersList({});

    const dataList = getData();
    console.log(usersList);

    return (
        <TableComponent
            headerList={headerList}
            dataList={dataList}
            count={dataList.length}
        />
    );
};

export default AdminPage;