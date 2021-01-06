import React from 'react';

import ChestShops from './ChestShops';
import Regions from './Regions';
import Players from './Players';
import Player from './Player';
import Region from './Region';
import RegionPlayers from './RegionPlayers';
import RegionChestShops from './RegionChestShops';
import PlayerRegions from './PlayerRegions';
import PlayerChestShops from './PlayerChestShops';

const RealTimeEvent = ({ event }) => {
  if (event.eventType === 'chest-shops') {
    return <ChestShops event={event} />;
  }

  if (event.eventType === 'regions') {
    return <Regions event={event} />;
  }

  if (event.eventType === 'players') {
    return <Players event={event} />;
  }

  if (event.eventType === 'region') {
    return <Region event={event} />;
  }

  if (event.eventType === 'region-players') {
    return <RegionPlayers event={event} />;
  }

  if (event.eventType === 'region-chest-shops') {
    return <RegionChestShops event={event} />;
  }

  if (event.eventType === 'player') {
    return <Player event={event} />;
  }

  if (event.eventType === 'player-regions') {
    return <PlayerRegions event={event} />;
  }

  if (event.eventType === 'player-chest-shops') {
    return <PlayerChestShops event={event} />;
  }

  return null;
};

export default RealTimeEvent;
