import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Region = ({ region }) => {
  const classes = useStyles();
  const history = useHistory();

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

  const navigateToRegion = (event, server, name) => {
    event.stopPropagation();

    history.push(`/search/regions/${server}/${name}`);
  };

  const navigateToPlayer = (event, player) => {
    event.stopPropagation();

    history.push(`/search/players/${player}`);
  };

  const getTimeUpdatedAgo = (timestamp) => {
    if (timestamp === undefined) return 'never';
    return moment(timestamp).fromNow();
  };

  const getMayors = (mayorNames) => {
    if (mayorNames === undefined || mayorNames.length === 0) {
      return 'None';
    }

    if (mayorNames.length > 4) {
      return mayorNames.map((mayorName, idx) => {
        if (idx > 3) return undefined;

        if (idx === 3) {
          return (
            <div className={classes.mayors} key={idx}>
              <span
                onClick={(event) => navigateToPlayer(event, mayorName)}
                className={classes.link}
              >
                {mayorName}
              </span>
              ... ({mayorNames.length - 3} more)
            </div>
          );
        } else {
          return (
            <div className={classes.mayors} key={idx}>
              <span
                onClick={(event) => navigateToPlayer(event, mayorName)}
                className={classes.link}
              >
                {mayorName}
              </span>
              ,
            </div>
          );
        }
      });
    }

    return mayorNames.map((mayorName, idx) => {
      if (idx === mayorNames.length - 1) {
        return (
          <span
            onClick={(event) => navigateToPlayer(event, mayorName)}
            key={idx}
            className={classes.link}
          >
            {mayorName}
          </span>
        );
      } else {
        return (
          <div className={classes.mayors} key={idx}>
            <span
              onClick={(event) => navigateToPlayer(event, mayorName)}
              className={classes.link}
            >
              {mayorName}
            </span>
            ,
          </div>
        );
      }
    });
  };

  return (
    <div
      className={classes.card}
      onClick={(event) => navigateToRegion(event, region.server, region.name)}
    >
      <div className={classes.cardContents}>
        <StoreIcon className={getRandomBackgroundColor(region.name)} />
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={classes.headline}>
              {region.name.toLowerCase()}
            </span>
            <span className={classes.updatedTime}></span>
          </div>
          <span className={classes.additionalInfo}>
            Mayors: {getMayors(region['mayors'])}
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
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    boxShadow:
      'inset -1px 0 0 0 rgba(0, 0, 0, .3), inset 0 -1px 0 0 rgba(0, 0, 0, 0.5), inset 1px 0 0 0 rgba(0, 0, 0, .2)',
    width: '100%',
    height: '187px',
    marginBottom: '20px',
    backgroundColor: '#323232',
    borderRadius: '1px',
    maxWidth: '865px',

    '&:hover': {
      boxShadow:
        '0 2px 6px 0 rgba(0, 0, 0, .3), inset -1px 0 0 0 rgba(0, 0, 0, 0.5), inset 0 -1px 0 0 rgba(0, 0, 0, .2), inset 1px 0 0 0 rgba(0, 0, 0, .2)',
      cursor: 'pointer',
    },

    '@media (max-width: 622px)': {
      height: 'auto',
    },
  },

  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '15px',
  },

  cardContents: {
    padding: '30px',
    display: 'flex',
  },

  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '500',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },

  buttons: {
    marginTop: '20px',
  },

  button: {
    backgroundColor: '#242526',
    fontSize: '12px',
    padding: '6px 10px',
    lineHeight: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '2px',
    marginRight: '8px',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  mayors: {
    display: 'inline-block',
    marginRight: '3px',
  },

  storeIcon1: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(51,51,51)',
  },

  storeIcon2: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(215,139,20)',
  },

  storeIcon3: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(29,96,209)',
  },

  storeIcon4: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(38,33,121)',
  },

  storeIcon5: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(0,157,220)',
  },

  storeIcon6: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(235,83,9)',
  },

  storeIcon7: {
    padding: '13.5px',
    color: 'white',
    fontSize: '38px',
    marginRight: '15px',
    backgroundColor: 'rgb(235,83,9)',
  },

  headline: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '8px',
    marginRight: '15px',
    display: 'block',
  },

  additionalInfo: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    display: 'block',
    marginBottom: '15px',
  },

  updatedTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '13px',
  },

  nullify: {
    textDecoration: 'none',
  },
}));

export default Region;
