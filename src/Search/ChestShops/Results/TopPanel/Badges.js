import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Badges = ({ badges }) => {
  const classes = useStyles();
  return (
    <div>
      {badges.map((badge, idx) => (
        badge && <span key={idx} className={classes.badge}>{badge}</span>
      ))}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  badge: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242526',
    color: 'rgb(255, 255, 255, 0.5)',
    fontSize: '13px',
    lineHeight: '13px',
    padding: '10px 12px',
    marginRight: '5px',

    '@media (max-width: 1250px)': {
      display: 'none'
    }
  }
}))

export default Badges;