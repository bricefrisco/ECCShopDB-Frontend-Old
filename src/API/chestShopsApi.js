export const fetchChestShopSigns = (
  page,
  server,
  tradeType,
  sortBy,
  hideOutOfStockSigns,
  hideFullShops,
  material
) => {
  const url = new URL(`${process.env.REACT_APP_BACKEND}/chest-shops`);
  url.searchParams.append('tradeType', tradeType);
  url.searchParams.append('sortBy', sortBy);
  url.searchParams.append('page', page);

  if (server !== 'all') {
    url.searchParams.append('server', server);
  }

  if (hideOutOfStockSigns && tradeType === 'buy') {
    url.searchParams.append('hideOutOfStock', 'true');
  }

  if (hideFullShops && tradeType === 'sell') {
    url.searchParams.append('hideFull', 'true');
  }

  if (material) {
    url.searchParams.append('material', material.value);
  }

  return fetch(url).then((response) => response.json());
};

export const fetchMaterialNames = (server, tradeType) => {
  return fetch(
    `${process.env.REACT_APP_BACKEND}/chest-shops/material-names?server=${server}&tradeType=${tradeType}`
  ).then((response) => response.json());
};
