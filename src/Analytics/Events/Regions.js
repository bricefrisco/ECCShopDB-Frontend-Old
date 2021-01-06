import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';
import moment from 'moment';

import Badges from './Badges';

const Regions = ({ event }) => {
  const classes = useStyles();

  const formatTime = (timestamp) => {
    if (timestamp === undefined) return 'never';
    return moment(timestamp).format('LTS');
  };

  return (
    <div className={classes.card}>
      <StoreIcon className={classes.icon} />
      <div style={{ width: '100%' }}>
        <div className={classes.flexBetween}>
          <span className={classes.title}>
            SEARCH: {event.eventType} {event.name && `(${event.name})`}
          </span>
          <span className={classes.timestamp}>
            {formatTime(event.timestamp)}
          </span>
        </div>
        <div className={classes.badges}>
          <Badges
            badges={[
              event.page && 'page:' + event.page,
              event.tradeType && 'type:' + event.tradeType,
              event.server ? 'server:' + event.server : 'server:all',
              event.name && 'name:' + event.name,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    boxShadow:
      'inset -1px 0 0 0 rgba(0, 0, 0, .3), inset 0 -1px 0 0 rgba(0, 0, 0, 0.5), inset 1px 0 0 0 rgba(0, 0, 0, .2)',
    width: '100%',
    height: '75px',
    marginBottom: '20px',
    display: 'flex',
    backgroundColor: '#323232',
    borderRadius: '1px',
    maxWidth: '865px',
    padding: '20px',

    '@media (max-width: 1030px)': {
      maxWidth: '1030px',
    },

    '@media (max-width: 670px)': {
      height: 'auto',
    },
  },

  icon: {
    fontSize: '40px',
    padding: '15px',
    display: 'inline-block',
    color: 'white',
    backgroundColor: 'rgb(0,157,220)',
  },

  title: {
    display: 'flex',
    marginLeft: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '4px',
  },

  timestamp: {
    fontSize: '12.5px',
    color: 'rgba(255, 255, 255, 0.6)',
  },

  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    marginBottom: '5px',
    marginLeft: '14px',
    display: 'block',
  },

  badges: {
    marginLeft: '14px',
    marginTop: '14px',
  },

  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

export default Regions;
