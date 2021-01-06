import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';

const RegionInfo = ({ region }) => {
  const classes = useStyles();

  if (region === undefined || region.name === undefined) {
    return null;
  }

  const getRandomBackgroundColor = (regionName) => {
    const regionNameChar = regionName[2].toUpperCase();
    if ('ABCD'.includes(regionNameChar)) {
      return classes.storeIcon1;
    } else if ('EFG'.includes(regionNameChar)) {
      return classes.storeIcon2;
    } else if ('HIJK'.includes(regionNameChar)) {
      return classes.storeIcon3;
    } else if ('LMNO'.includes(regionNameChar)) {
      return classes.storeIcon4;
    } else if ('PQRS'.includes(regionNameChar)) {
      return classes.storeIcon5;
    } else if ('TUV'.includes(regionNameChar)) {
      return classes.storeIcon6;
    } else {
      return classes.storeIcon7;
    }
  };

  return (
    <div className={classes.region}>
      <StoreIcon className={getRandomBackgroundColor(region.name)} />
      <div className={classes.regionInfo}>
        <span className={classes.title}>
          {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
        </span>
        <span className={classes.server}>
          on {region.server.charAt(0).toUpperCase() + region.server.slice(1)}
        </span>
        <span className={classes.description}>
          {region['name'].toLowerCase()} is a{' '}
          {region['active'] ? 'shop ' : 'town '}
          on {region.server} with {region['mayors'].length}{' '}
          {region['mayors'].length === 1 ? 'mayor' : 'mayors'} and{' '}
          {region['numChestShops']} chest shops.
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  region: {
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 1036px)': {
      marginBottom: '40px',
      margin: 'auto',
    },
  },

  regionInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },

  title: {
    fontSize: '28px',
    lineHeight: '40px',
    margin: '0 0 0px 0',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },

  server: {
    fontSize: '20px',
    lineHeight: '22px',
    margin: '0 0 8px 0',
    color: 'rgba(255, 255, 255, 0.75)',
  },

  description: {
    color: 'rgba(255, 255, 255, 0.75)',
  },

  storeIcon1: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(51,51,51)',
  },

  storeIcon2: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(215,139,20)',
  },

  storeIcon3: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(29,96,209)',
  },

  storeIcon4: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(38,33,121)',
  },

  storeIcon5: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(0,157,220)',
  },

  storeIcon6: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(235,83,9)',
  },

  storeIcon7: {
    padding: '25px',
    color: 'white',
    fontSize: '70px',
    marginRight: '20px',
    backgroundColor: 'rgb(235,83,9)',
  },
}));

export default RegionInfo;
