import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const PlayerInfo = ({ player }) => {
  const classes = useStyles();

  if (player === undefined || player.name === undefined) {
    return null;
  }

  const getTimeAgo = (timestamp) => {
    if (timestamp === undefined) return 'never';
    return moment(timestamp).fromNow();
  };

  return (
    <div className={classes.player}>
      <img
        src={`https://minotar.net/avatar/${player.name}/120.png`}
        alt={`${player.name}'s Minecraft avatar`}
        className={classes.avatar}
      />
      <div className={classes.playerInfo}>
        <span className={classes.title}>
          {player.name.charAt(0).toUpperCase() + player.name.slice(1)}
        </span>
        <span className={classes.lastSeen}>
          Last seen {getTimeAgo(player.lastSeen)}
        </span>
        <span className={classes.description}>
          {player.name} owns {player.towns.length} towns and{' '}
          {player.numChestShops} chest shops.
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  player: {
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 888px)': {
      margin: 'auto',
      marginBottom: '40px',
    },
  },

  playerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },

  title: {
    fontSize: '28px',
    lineHeight: '40px',
    margin: '0',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },

  lastSeen: {
    fontSize: '20px',
    lineHeight: '22px',
    margin: '0 0 8px 0',
    color: 'rgba(255, 255, 255, 0.75)',
  },

  description: {
    color: 'rgba(255, 255, 255, 0.75)',
  },

  avatar: {
    marginRight: '20px',
  },
}));

export default PlayerInfo;
