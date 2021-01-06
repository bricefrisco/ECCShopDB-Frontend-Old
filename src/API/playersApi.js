export const fetchPlayer = (name) => {
  return fetch(`${process.env.REACT_APP_BACKEND}/players/${name}`).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error();
      }
    }
  );
};

export const fetchPlayers = (page, name, hideInactivePlayers) => {
  const url = new URL(`${process.env.REACT_APP_BACKEND}/players`);
  url.searchParams.append('page', page);

  if (hideInactivePlayers) {
    url.searchParams.append('active', 'true');
  }

  if (name) {
    url.searchParams.append('name', name.value);
  }

  return fetch(url).then((response) => response.json());
};

export const fetchPlayerNames = (hideInactivePlayers) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/players/player-names?active=${hideInactivePlayers}`
  ).then((response) => response.json());
};

export const fetchPlayerSigns = (player, tradeType, page) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/players/${player.name}/chest-shops?tradeType=${tradeType}&page=${page}`
  ).then((response) => response.json());
};

export const fetchRegionsByPlayer = (name, page) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/players/${name}/towns?page=${page}`
  ).then((response) => response.json());
};
