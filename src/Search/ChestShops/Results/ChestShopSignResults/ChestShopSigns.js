import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ChestShopSign from './ChestShopSign'

const ChestShopSigns = ({ signs, tradeType, server }) => {
  const classes = useStyles()

  if (signs === undefined) {
    return null;
  }

  if (signs.length === 0) {
    return <div className={classes.noResultsFound}>No chest shops found by that criteria.</div>
  }

  return signs.map((sign, idx) => <ChestShopSign key={idx} sign={sign} tradeType={tradeType} server={server} />)
}

const useStyles = makeStyles(() => ({
  noResultsFound: {
    marginTop: '17px',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.7)'
  }
}))

export default ChestShopSigns;