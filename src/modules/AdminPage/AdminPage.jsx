import React from "react";
import TableComponent from "../../components/UI/Table/TableComponent";
import {getData, headerList} from "./data";

const AdminPage = (props) => {

    const dataList = getData();

    return (
        <TableComponent
            headerList={headerList}
            dataList={dataList}
            count={dataList.length}
        />
    );
};

export default AdminPage;