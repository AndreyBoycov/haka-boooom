import React from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";

const TableBodyData = (props) => {
    const { rows } = props;

    const getCellsByRow = (row) => {
        const cellsList = [];
        for (const key in row) {
            cellsList.push(
                <TableCell scope={row}>{row[key]}</TableCell>
            )
        }
        return cellsList;
    }

    const getRowsOfTable = () => {
        return rows.map((row, index) => {
            return (
                <TableRow key={ row.id || index }>
                    { getCellsByRow(row) }
                </TableRow>
            );
        });
    }


    return (
        <TableBody>
            { getRowsOfTable() }
        </TableBody>
    );
};

export default TableBodyData;