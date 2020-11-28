import React from "react";
import {TableFooter, TablePagination, TableRow} from "@material-ui/core";
import classes from './Paginator.css';
import TableCell from "@material-ui/core/TableCell";

const LABEL_ROWS_PER_PAGE = 'Строк на странице:';

const getLabelDisplayedRows = ({from, to, count}) =>
    `${from}-${to} из ${count}`;


const Paginator = (props) => {
    const {
        pageSizesList,
        count,
        rowsPerPage,
        numberPage,
        onChangePage,
        onChangeRowsPerPage
    } = props;

    return (
        <TablePagination
            classes={classes}
            rowsPerPageOptions={pageSizesList}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={numberPage}
            backIconButtonProps={{
                'aria-label': 'Prev page',
            }}
            nextIconButtonProps={{
                'aria-label': 'Next page',
            }}
            labelRowsPerPage={LABEL_ROWS_PER_PAGE}
            labelDisplayedRows={getLabelDisplayedRows}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
        />
    );
};

export default Paginator;