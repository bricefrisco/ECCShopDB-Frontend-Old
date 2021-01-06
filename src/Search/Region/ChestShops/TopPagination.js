import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const TopPagination = ({ pagination, setPage, labelTextEnd }) => {
    const classes = useStyles()

    if (pagination === undefined) {
        return null;
    }

    return (
        <TablePagination
            component="div"
            count={pagination.totalElements}
            page={pagination.currentPage - 1}
            onChangePage={setPage}
            rowsPerPage={10}
            rowsPerPageOptions={[10]}
            labelDisplayedRows={({ from, to, count }) => `${from} - ${to} of ${count} ${labelTextEnd}`}
            className={classes.pagination}
            ActionsComponent={PaginationActions}
        />
    )
}

const PaginationActions = ({ count, page, rowsPerPage, onChangePage }) => {
    const classes = useStyles();
    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.paginationActions}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                <FirstPageIcon />
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <LastPageIcon />
            </IconButton>
        </div>
    );
}

const useStyles = makeStyles(() => ({
    pagination: {
        '& .MuiTablePagination-toolbar': {
            minHeight: '0px !important'
        },

        '& .MuiTablePagination-caption': {
            color: 'rgba(255, 255, 255, 0.7)'
        },

        '& .MuiToolbar-root.MuiToolbar-regular.MuiTablePagination-toolbar.MuiToolbar-gutters': {
            paddingLeft: '0px',
            marginBottom: '5px'
        }
    },

    paginationActions: {
        display: 'flex',
        '& .MuiButtonBase-root.MuiIconButton-root': {
            padding: '8px',
            borderRadius: '5px'
        },

        '& .MuiIconButton-root': {
            color: 'rgba(255, 255, 255, 0.7)',

            '&:hover': {
                color: '#6ba65e'
            }
        },

        '& .MuiButtonBase-root.MuiIconButton-root.Mui-disabled.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.3)'
        },
    }
}))

export default TopPagination;