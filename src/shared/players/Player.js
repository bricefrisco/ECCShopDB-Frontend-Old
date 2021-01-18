import React from 'react';
import { Link } from 'react-router-dom';

import './player.css';

export const Towns = ({ names }) => {
  if (names === undefined || names.length === 0) {
    return 'None';
  }

  return names.map((name, idx) => {
    if (idx > 3) return undefined;
    return (
      <span className='town' key={idx}>
        <Link to={`/search/regions/${name}`} className='link weight-bold'>
          {name}
        </Link>
        {names.length >= 4 && idx === 3 && `... (${names.length - 3} more)`}
        {idx !== 3 && names.length - 1 !== idx && ', '}
      </span>
    );
  });
};

export const PlayerDescription = ({ name, numChestShops, lastSeen }) => {
  return (
    <span className='ml-80 block pb-4 txt-sm'>
      {name} was last seen {lastSeen} and owns{' '}
      {numChestShops === 0 ? 'no' : numChestShops}{' '}
      {numChestShops === 1 ? 'chest shop.' : 'chest shops.'}
    </span>
  );
};

export const PlayerInfo = ({ name, towns, lastSeen }) => {
  return (
    <div>
      <span className='block txt-sm weight-bold pb-1'>{name}</span>

      <span className='block txt-sm weight-lite'>
        Towns: <Towns names={towns} />
      </span>
    </div>
  );
};

export const Player = ({ player }) => {
  return (
    <div className='player background-dark p-5 mt-3 mb-3'>
      <div className='flex'>
        <Link to={`/search/players/${player.name}`}>
          <img
            className='mc-avatar mr-3'
            src={`https://minotar.net/avatar/${chestShop.owner.name}/60`}
            alt='Avatar'
          />
        </Link>
      </div>
    </div>
  );
};
