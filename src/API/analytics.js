export const getAllAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/all?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getChestShopAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/chest-shops?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getRegionsAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/regions?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getPlayersAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/players?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getRegionAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/region?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};

export const getPlayerAnalytics = (page, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_ANALYTICS_BACKEND}/real-time/player?page=${page}&pageSize=${pageSize}`
  ).then((response) => response.json());
};
