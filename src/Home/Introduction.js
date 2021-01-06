import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Features from './Features';

const Introduction = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.intro}>
        Welcome to <span className={classes.bold}>EcoCityCraft ShopDB!</span>
      </div>

      <div className={classes.subIntro}>
        An interactive search tool to search for items to buy or sell on
        EcoCityCraft.
      </div>

      <div className={classes.stats}>
        <div className={classes.stat}>
          <span className={classes.statNum}>90+</span>
          <span className={classes.statDesc}>shops</span>
        </div>

        <div className={classes.stat}>
          <span className={classes.statNum}>5,000+</span>
          <span className={classes.statDesc}>chest shops</span>
        </div>

        <div className={classes.stat}>
          <span className={classes.statNum}>70,000+</span>
          <span className={classes.statDesc}>searches</span>
        </div>
      </div>

      <Features />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#373737',
    paddingTop: '100px',
    paddingBottom: '100px',
    color: 'rgba(255, 255, 255, 0.6)',
  },

  intro: {
    fontSize: '3rem',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: '5px',
  },

  subIntro: {
    fontSize: '1.3rem',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: '50px',
  },

  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '750px',
    margin: 'auto',
    marginBottom: '100px',

    '@media (max-width: 850px)': {
      marginRight: '15px',
    },
  },

  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  statNum: {
    fontSize: '2rem',
    fontWeight: '500',
    color: '#6ba65e',
  },

  statDesc: {
    display: 'block',
    fontSize: '1.25rem',
  },

  bold: {
    fontWeight: '500',
  },
}));

export default Introduction;
