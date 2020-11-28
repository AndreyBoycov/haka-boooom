import React, { useState } from "react";
import {Table} from "@material-ui/core";
import TableHeader from "./Head/TableHeader";
import TableBodyData from "./Body/TableBodyData";
import Paginator from "./Paginator/Paginator";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";

const getDataListWithoutInvisibleKeys = (dataList, invisibleKeysList) => {
    return dataList.map(row => {
        for (const rowKey in row) {
            if (invisibleKeysList.includes(rowKey)) {
                delete row[rowKey];
            }
        }

        return row;
    });
};

const TableComponent = (props) => {
    const {
        invisibleKeysList = [],
        headerList,
        dataList,
        count,
        pageSizesList = [50, 100, 200],
        onChangePage,
        onChangeRowsPerPage
    } = props;

    const [numberPage, setNumberPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(1);

    const handleChangePage = (event, page) => {
        setNumberPage(page);
        if(onChangePage) {
            onChangePage(page)
        }
    }

    const handleChangeRowsPerPage = (event) => {
        const rowsPerPage = +event.target.value;
        setRowsPerPage(rowsPerPage);
        if(onChangeRowsPerPage) {
            onChangeRowsPerPage(rowsPerPage)
        }
    }

    return (
        <TableContainer>
            <Table>
                {/*<TableHead>*/}
                    <TableHeader headerList={headerList} />
                {/*</TableHead>*/}
                {/*<TableBody>*/}
                    <TableBodyData rows={getDataListWithoutInvisibleKeys(dataList, invisibleKeysList)}>
                    </TableBodyData>
                {/*</TableBody>*/}
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
