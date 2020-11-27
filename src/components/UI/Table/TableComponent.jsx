import React from "react";
import {Table} from "@material-ui/core";
import TableHeader from "./Head/TableHeader";
import TableBodyData from "./Body/TableBodyData";

const TableComponent = (props) => {
    const { headerList, dataList } = props;

    return (
        <Table>
            <TableHeader headerList={headerList} />
            <TableBodyData rows={dataList} />
        </Table>
    );
};

export default TableComponent;