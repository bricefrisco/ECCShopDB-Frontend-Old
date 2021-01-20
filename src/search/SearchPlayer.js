import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchPlayer,
  getPlayer,
  getError,
  getErrorMessage,
  getLoading,
} from '../state/playerSlice';

import { getTimeFromNow } from '../api';
import { Breadcrumbs, Breadcrumb } from '../shared/breadcrumbs';
import { Loading } from '../shared/loading';

const PlayerBreadcrumbs = ({ name }) => {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <Link to='/search/players' className='link-no-color'>
          Players
        </Link>
      </Breadcrumb>
      <Breadcrumb>
        <span className='color-primary'>{name}</span>
      </Breadcrumb>
    </Breadcrumbs>
  );
};

const PlayerInfo = ({ name, lastSeen, numTowns, numChestShops }) => {
  return (
    <div className='container pt-50 pb-50 background flex'>
      <img
        className='mc-avatar mr-4'
        src={`https://minotar.net/avatar/${name}/100`}
        alt='Avatar'
      />

      <div className='pl-1'>
        <h2 className='txt-md weight-lite pb-1'>{name}</h2>
        <p className='pb-2 weight-lite'>
          {lastSeen
            ? `Last seen ${getTimeFromNow(lastSeen)}.`
            : "Hasn't played in quite some time."}
        </p>
        <p className='pb-1'>
          Owns{' '}
          <span className='weight-bold'>
            {numTowns === 0 ? 'no' : numTowns}{' '}
            {numTowns === 1 ? 'town' : 'towns'}{' '}
          </span>
          and{' '}
          <span className='weight-bold'>
            {numChestShops === 0 ? 'no' : numChestShops}{' '}
            {numChestShops === 1 ? 'chest shop.' : 'chest shops.'}
          </span>
        </p>
      </div>
    </div>
  );
};

const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const loading = useSelector(getLoading);
  const player = useSelector(getPlayer);
  const error = useSelector(getError);
  const errorMessage = useSelector(getErrorMessage);

  useEffect(() => {
    dispatch(fetchPlayer(name));
  }, [dispatch]);

  return (
    <>
      <PlayerBreadcrumbs name={name} />
      <div id='player' className='background vh-100'>
        {loading && <Loading />}
        {player && (
          <PlayerInfo
            name={player.name}
            lastSeen={player.lastSeen}
            numChestShops={player.numChestShops}
            numTowns={player.towns.length}
          />
        )}
      </div>
    </>
  );
};

export default SearchPlayer;
