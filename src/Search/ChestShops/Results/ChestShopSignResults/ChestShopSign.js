import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import CopyButton from './CopyButton';

const ChestShopSign = ({ tradeType, server, sign }) => {
  const classes = useStyles();

  const getShopTradeType = () => {
    return tradeType === 'buy' ? 'Selling' : 'Buying';
  };

  const getPricePerUnit = () => {
    if (tradeType === 'buy') {
      return (sign['buyPrice'] / sign['quantity']).toFixed(2);
    } else {
      return (sign['sellPrice'] / sign['quantity']).toFixed(2);
    }
  };

  const getPrice = () => {
    return tradeType === 'buy' ? sign['buyPrice'] : sign['sellPrice'];
  };

  const getTimeUpdatedAgo = (timestamp) => {
    if (timestamp === undefined) return 'never';
    return moment(timestamp).fromNow();
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardContents}>
        <img
          className={classes.avatar}
          src={`https://minotar.net/avatar/${sign['owner']['name']}/65`}
          alt={`${sign['owner']['name']} minecraft icon`}
        />
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={classes.headline}>
              {getShopTradeType()} {sign['quantity']} {sign['material']} for $
              {getPricePerUnit()} each
            </span>
            <span className={classes.updatedTime}>
              Updated {getTimeUpdatedAgo(sign['town']['lastUpdated'])}
            </span>
          </div>
          <span className={classes.additionalInfo}>
            By{' '}
            <Link
              to={`/search/players/${sign['owner']['name']}`}
              className={classes.link}
            >
              {sign['owner']['name']}
            </Link>{' '}
            • in{' '}
            <Link
              to={`/search/regions/${sign['town']['server']}/${sign['town']['name']}`}
              className={classes.link}
            >
              {sign['town']['name']}
            </Link>{' '}
            {server === 'all' && <i>({sign['town']['server']})</i>}
            {tradeType === 'buy' && sign['count'] === 0 && (
              <div className={classes.outOfStock}>Out of stock.</div>
            )}
            {tradeType === 'buy' && sign['count'] !== 0 && (
              <div className={classes.inStock}>
                In stock ({sign['count']} left)
              </div>
            )}
            {tradeType === 'sell' &&
              (sign['count'] === 27 ||
                sign['count'] === 54 ||
                sign['count'] === 1728 ||
                sign['count'] === 3456) && (
                <div className={classes.maybeOutOfStock}>
                  Potentially full (count: {sign['count']})
                </div>
              )}
            {tradeType === 'sell' &&
              sign['count'] !== 27 &&
              sign['count'] !== 54 &&
              sign['count'] !== 1728 &&
              sign['count'] !== 3456 && (
                <div className={classes.inStock}>
                  Available (count: {sign['count']})
                </div>
              )}
          </span>
          <span className={classes.description}>
            {sign['owner']['name']} is {getShopTradeType().toLowerCase()}{' '}
            {sign['quantity']} {sign['material']} in{' '}
            {sign['town']['name'].toLowerCase()} for ${getPrice()}
          </span>

          <div className={classes.buttons}>
            <CopyButton
              text='Copy Warp'
              copyText={`/warp ${sign['town']['name']}`}
            />

            <CopyButton
              text='Copy Coords'
              copyText={`${sign['location']['x']} ${sign['location']['y']} ${sign['location']['z']}`}
            />

            <Tooltip title='Coming soon!' placement='top'>
              <span className={classes.buttonDisabled}>Copy Bot TP</span>
            </Tooltip>
          </div>

          <div className={classes.coordinatesMobile}>
            <span className={classes.coordinatesTextMobile}>
              Coords: {sign['location']['x']}, {sign['location']['y']},{' '}
              {sign['location']['z']}
            </span>
          </div>
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
    height: '195px',
    marginBottom: '20px',
    backgroundColor: '#323232',
    borderRadius: '1px',
    maxWidth: '865px',

    '@media (max-width: 1030px)': {
      maxWidth: '1030px',
    },

    '@media (max-width: 670px)': {
      height: 'auto',
    },
  },

  cardContents: {
    padding: '30px',
    display: 'flex',
  },

  avatar: {
    marginRight: '15px',
    width: '65px',
    height: '65px',

    '@media (max-width: 650px)': {
      width: '40px',
      height: '40px',
    },
  },

  headline: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '4px',
    display: 'block',
  },

  additionalInfo: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    display: 'block',
    marginBottom: '15px',
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

  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '15px',
  },

  buttons: {
    marginTop: '20px',

    '@media (max-width: 434px)': {
      display: 'none',
    },
  },

  updatedTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12.5px',
    '@media (max-width: 574px)': {
      display: 'none',
    },
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

  buttonDisabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    fontSize: '12px',
    padding: '6px 10px',
    lineHeight: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '2px',
    marginRight: '8px',

    '&:hover': {
      cursor: 'default',
    },
  },

  coordinatesMobile: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '20px',
    '@media (min-width: 435px)': {
      display: 'none',
    },
  },

  coordinatesTextMobile: {
    fontSize: '12px',
  },

  outOfStock: {
    marginTop: '4px',
    color: '#dc3545',
    fontWeight: '500',
  },

  inStock: {
    marginTop: '4px',
    color: '#1e7e34',
    fontWeight: '500',
  },

  maybeOutOfStock: {
    marginTop: '4px',
    color: '#ffc107',
  },
}));

export default ChestShopSign;
