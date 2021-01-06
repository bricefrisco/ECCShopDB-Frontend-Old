export const getAllAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/all?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getChestShopAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/chest-shops?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getRegionsAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/regions?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getPlayersAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/players?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getRegionAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/region?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getPlayerAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/events/player?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};
