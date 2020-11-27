import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = (props) => {
    const { headerList } = props;

    const getHeader = () => {
        return Object.values(headerList).map(el => (
            <TableCell>{ el }</TableCell>
        ));
    }


    return (
        <TableHead>
            <TableRow>{ getHeader() }</TableRow>
        </TableHead>
    );
};

export default TableHeader;