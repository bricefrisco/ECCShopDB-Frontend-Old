import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Player = ({ player }) => {
  const classes = useStyles();
  const history = useHistory();

  const getTimeAgo = (timestamp) => {
    if (timestamp === null) return 'never';
    return moment(timestamp).fromNow();
  };

  const navigateToPlayer = (event, player) => {
    event.stopPropagation();

    history.push(`/search/players/${player}`);
  };

  const navigateToRegion = (event, region) => {
    event.stopPropagation();

    const server = region.split('|')[0].replace('_', '-').toLowerCase();
    const town = region.split('|')[1];

    history.push(`/search/regions/${server}/${town}`);
  };

  const getTowns = (player) => {
    if (player.towns === undefined || player.towns.length === 0) {
      return 'None';
    }

    if (player.towns.length < 5) {
      return player.towns.map((town, idx) => {
        if (idx === player.towns.length - 1) {
          return (
            <div className={classes.towns} key={idx}>
              <span
                onClick={(event) => navigateToRegion(event, town)}
                className={classes.link}
              >
                {town.split('|')[1]}
              </span>
            </div>
          );
        } else {
          return (
            <div className={classes.towns} key={idx}>
              <span
                onClick={(event) => navigateToRegion(event, town)}
                className={classes.link}
              >
                {town.split('|')[1]}
              </span>
              ,
            </div>
          );
        }
      });
    }

    return player.towns.map((town, idx) => {
      if (idx > 3) return undefined;

      if (idx === 3) {
        return (
          <div className={classes.towns} key={idx}>
            <span
              onClick={(event) => navigateToRegion(event, town)}
              className={classes.link}
            >
              {town.split('|')[1]}
            </span>
            ... ({player.towns.length - 3} more)
          </div>
        );
      } else {
        return (
          <div className={classes.towns} key={idx}>
            <span
              onClick={(event) => navigateToRegion(event, town)}
              className={classes.link}
            >
              {town.split('|')[1]}
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
      onClick={(event) => navigateToPlayer(event, player['name'])}
    >
      <div className={classes.cardContents}>
        <img
          className={classes.avatar}
          alt={`${player['name']} minecraft avatar`}
          src={`https://minotar.net/avatar/${player['name']}/100`}
        />
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={classes.headline}>
              {player['name'].toLowerCase()}
            </span>
            <span className={classes.updatedTime}></span>
          </div>
          <span className={classes.townInfo}>Towns: {getTowns(player)}</span>
          {player['active'] && (
            <span className={classes.additionalInfoActive}>Active</span>
          )}
          {!player['active'] && (
            <span className={classes.additionalInfoInactive}>Inactive</span>
          )}
          <span className={classes.description}>
            {player['name'].toLowerCase()} was last seen{' '}
            {getTimeAgo(player['lastSeen'])} and owns {player['numChestShops']}{' '}
            chest shops.
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
    height: '155px',
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

  cardContents: {
    padding: '30px',
    display: 'flex',
  },

  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '15px',
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

  additionalInfoActive: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'block',
    marginBottom: '10px',
    color: '#1e7e34',
  },

  additionalInfoInactive: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'block',
    marginBottom: '10px',
    color: '#dc3545',
  },

  headline: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '8px',
    marginRight: '15px',
    display: 'block',
  },

  updatedTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '13px',
  },

  avatar: {
    width: '65px',
    height: '65px',
    marginRight: '15px',
  },

  towns: {
    display: 'inline-block',
    marginRight: '3px',
  },

  townInfo: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    display: 'block',
    marginBottom: '5px',
  },
}));

export default Player;
