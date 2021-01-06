import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ChestShopSign = ({ sign, tradeType }) => {
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
            </Link>
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
          <div className={classes.coordinates}>
            <span className={classes.coordinatesText}>
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
    height: '160px',
    marginBottom: '20px',
    backgroundColor: '#323232',
    borderRadius: '1px',
    maxWidth: '865px',

    '&:hover': {
      boxShadow:
        '0 2px 6px 0 rgba(0, 0, 0, .3), inset -1px 0 0 0 rgba(0, 0, 0, 0.5), inset 0 -1px 0 0 rgba(0, 0, 0, .2), inset 1px 0 0 0 rgba(0, 0, 0, .2)',
    },

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

  updatedTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12.5px',
    '@media (max-width: 574px)': {
      display: 'none',
    },
  },

  coordinates: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '20px',
  },

  coordinatesText: {
    fontSize: '13px',
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
