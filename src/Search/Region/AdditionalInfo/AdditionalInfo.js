import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const AdditionalInfo = ({ region }) => {
  const classes = useStyles();

  if (region === undefined || region.name === undefined) {
    return null;
  }

  const getTimeUpdatedAgo = (timestamp) => {
    if (timestamp === undefined) return 'Never updated.';
    return moment(timestamp).fromNow();
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.shopBoundaries}>Shop Boundaries</div>
        <div className={classes.lower}>
          <span>Lower</span>
          <span className={classes.coords}>
            {region.iBounds.x}, {region.iBounds.y}, {region.iBounds.z}
          </span>
        </div>
        <div className={classes.upper}>
          <span>Upper</span>
          <span className={classes.coords}>
            {region.oBounds.x}, {region.oBounds.y}, {region.oBounds.z}
          </span>
        </div>
      </div>

      <div className={classes.box2}>
        <div className={classes.lastUpdated}>Last Updated</div>
        <div className={classes.lastUpdatedTime}>
          {getTimeUpdatedAgo(region.lastUpdated)}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: '25px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',

    '@media (max-width: 1036px)': {
      paddingLeft: '0px',
      borderLeft: 'none',
      margin: 'auto',
    },
  },

  box: {
    backgroundColor: '#323232',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)',
    width: '325px',
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '500',
  },

  box2: {
    backgroundColor: '#323232',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)',
    width: '325px',
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '500',
    marginTop: '30px',
  },

  shopBoundaries: {
    padding: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },

  lower: {
    padding: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },

  upper: {
    padding: '16px',
  },

  coords: {
    marginLeft: '40px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
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
