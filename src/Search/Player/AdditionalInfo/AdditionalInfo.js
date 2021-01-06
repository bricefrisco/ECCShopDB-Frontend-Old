import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const AdditionalInfo = ({ player }) => {
  const classes = useStyles();

  if (player === undefined || player.name === undefined) {
    return null;
  }

  const getTimeUpdatedAgo = (timestamp) => {
    if (timestamp === undefined) return 'Never updated.';
    return moment(timestamp).fromNow();
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.lastUpdated}>Last Updated</div>
        <div className={classes.lastUpdatedTime}>
          {getTimeUpdatedAgo(player.lastUpdated)}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: '25px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',

    '@media (max-width: 888px)': {
      paddingLeft: '0px',
      margin: 'auto',
      borderLeft: 'none',
    },
  },

  box: {
    backgroundColor: '#323232',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)',
    width: '325px',
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '500',
  },

  lastUpdated: {
    padding: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },

  lastUpdatedTime: {
    padding: '16px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
  },
}));

export default AdditionalInfo;
