export const fetchRegionNames = (server, hideDisabledRegions) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/regions/region-names?server=${server}&active=${hideDisabledRegions}`
  ).then((response) => response.json());
};

export const fetchRegion = (server, name) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/regions/${server}/${name}`
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error();
    }
  });
};

export const fetchRegions = (page, server, active, name) => {
  const url = new URL(`${process.env.REACT_APP_BACKEND}/regions`);

  url.searchParams.append('page', page);
  url.searchParams.append('active', active);

  if (server !== 'all') {
    url.searchParams.append('server', server);
  }

  if (name) {
    url.searchParams.append('name', name.value);
  }

  return fetch(url).then((response) => response.json());
};

export const fetchRegionSigns = (region, tradeType, page) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/regions/${region.server}/${region.name}/chest-shops?page=${page}&tradeType=${tradeType}`
  ).then((response) => response.json());
};

export const getPlayersByRegion = (server, name, page) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/regions/${server}/${name}/mayors?page=${page}`
  ).then((response) => response.json());
};
