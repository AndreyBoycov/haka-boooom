import React, { useState } from "react";
import {Table} from "@material-ui/core";
import TableHeader from "./Head/TableHeader";
import TableBodyData from "./Body/TableBodyData";
import Paginator from "./Paginator/Paginator";

const TableComponent = (props) => {
    const {
        headerList,
        dataList,
        count,
        pageSizesList = [50, 100, 200],
        onChangePage,
        onChangeRowsPerPage
    } = props;

    const [numberPage, setNumberPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(pageSizesList[0]);

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
        <Table>
            <TableHeader headerList={headerList} />
            <TableBodyData rows={dataList} />
            <Paginator
                headersSize={headerList.length}
                pageSizesList={pageSizesList}
                count={count}
                rowsPerPage={rowsPerPage}
                numberPage={numberPage}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Table>
    );
};

export default TableComponent;