import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const BottomPagination = ({ page, totalPages, setPage }) => {
  const classes = useStyles();
  const materialClasses = useMaterialStyles();

  return (
    <div className={classes.pagination}>
      <Pagination
        page={page}
        classes={materialClasses}
        count={totalPages}
        onChange={(event, newPage) => setPage(event, newPage - 1)}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  pagination: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    paddingTop: '20px',
    marginBottom: '20px',
  },
}));

const useMaterialStyles = makeStyles(() => ({
  root: {
    '& .MuiButtonBase-root': {
      color: 'rgba(255, 255, 255, 0.7)',

      '&:hover': {
        backgroundColor: 'rgba(107, 106, 94, 0.4)',
      },
    },

    '& .Mui-selected': {
      backgroundColor: 'rgba(107, 166, 94, 0.6)',
    },

    '& .MuiPaginationItem-ellipsis': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));

export default BottomPagination;
