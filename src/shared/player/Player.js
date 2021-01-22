import React from 'react';
import { Link } from 'react-router-dom';

import { getTimeFromNow } from '../../api';
import './player.css';

export const Towns = ({ towns }) => {
  if (towns === undefined || towns.length === 0) {
    return 'None';
  }

  return towns.map((town, idx) => {
    if (idx > 3) return undefined;

    const townName = town.split('|')[1].replace('_', '-').toLowerCase();
    const server = town.split('|')[0].toLowerCase();

    return (
      <span className='towns' key={idx}>
        <Link
          to={`/search/regions/${server}/${townName}`}
          className='link weight-bold'
        >
          {townName}
        </Link>
        {towns.length >= 4 && idx === 3 && `... (${towns.length - 3} more)`}
        {idx !== 3 && towns.length - 1 !== idx && ', '}
      </span>
    );
  });
};

export const PlayerDescription = ({ name, numChestShops, lastSeen }) => {
  return (
    <span className='ml-80 block pt-3 txt-sm'>
      {name}{' '}
      {lastSeen
        ? `was last seen ${lastSeen} and`
        : ' has been offline awhile and '}{' '}
      owns {numChestShops === 0 ? 'no' : numChestShops}{' '}
      {numChestShops === 1 ? 'chest shop.' : 'chest shops.'}
    </span>
  );
};

export const PlayerInfo = ({ name, towns, active }) => {
  return (
    <div>
      <Link to={`/search/players/${name}`} className='link-no-color'>
        <span className='block txt-sm weight-bold pb-1'>{name}</span>
      </Link>

      <span className='block txt-sm weight-lite'>
        Towns: <Towns towns={towns} />
      </span>

      {active ? (
        <span className='block txt-xs weight-bold color-primary mt-1'>
          Active
        </span>
      ) : (
        <span className='block txt-xs weight-bold color-error mt-1'>
          Inactive
        </span>
      )}
    </div>
  );
};

export const Player = ({ player }) => {
  return (
    <div className='player background-dark p-5 mt-3 mb-3'>
      <div className='flex flex-between'>
        <div className='flex'>
          <Link to={`/search/players/${player.name}`}>
            <img
              className='mc-avatar mr-3'
              src={`https://minotar.net/avatar/${player.name}/60`}
              alt='Avatar'
            />
          </Link>
          <PlayerInfo
            name={player.name}
            towns={player.towns}
            active={player.active}
          />
        </div>

        {player.lastUpdated && (
          <span className='last-updated txt-xs'>
            Last updated {getTimeFromNow(player.lastUpdated)}
          </span>
        )}
      </div>

      <PlayerDescription
        lastSeen={player.lastSeen && getTimeFromNow(player.lastSeen)}
        name={player.name}
        numChestShops={player.numChestShops}
      />
    </div>
  );
};
