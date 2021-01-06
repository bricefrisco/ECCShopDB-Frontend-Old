import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress size={50} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
}));

export default Loading;
