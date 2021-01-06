import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TradeTypeOptions from './TradeTypeOptions';
import ServerOptions from './ServerOptions';
import OtherOptions from './OtherOptions';
import SortByOptions from './SortByOption';

const Filters = ({
  tradeType,
  setTradeType,
  server,
  setServer,
  hideOutOfStockSigns,
  setHideOutOfStockSigns,
  hideIdenticalSigns,
  setHideIdenticalSigns,
  sortBy,
  setSortBy,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.filters}>
      <Typography className={classes.filterOptionTitle}>Filters</Typography>

      <div className={classes.filterGroup}>
        <TradeTypeOptions tradeType={tradeType} setTradeType={setTradeType} />
        <ServerOptions server={server} setServer={setServer} />
      </div>

      <div className={classes.filterGroup}>
        <OtherOptions
          hideIdenticalSigns={hideIdenticalSigns}
          setHideIdenticalSigns={setHideIdenticalSigns}
          hideOutOfStockSigns={hideOutOfStockSigns}
          setHideOutOfStockSigns={setHideOutOfStockSigns}
          tradeType={tradeType}
        />
        <SortByOptions sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  filters: {
    minWidth: '275px',
    maxWidth: '350px',
    width: '30%',

    '@media (max-width: 680px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },

    '@media (max-width: 1030px)': {
      display: 'flex',
      maxWidth: '1030px',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },
  },

  filterOptionTitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    fontSize: '15px',

    '@media (max-width: 1030px)': {
      display: 'none',
    },
  },

  filterGroup: {
    '@media (max-width: 1030px)': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    },

    '@media (max-width: 680px)': {
      justifyContent: 'space-between',
      maxWidth: '400px',
    },
  },
}));

export default Filters;
