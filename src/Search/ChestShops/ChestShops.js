import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Filters from './Filters/Filters';
import ChestShopSignResults from './Results/ChestShopSignResults/ChestShopSignResults';

import { fetchChestShopSigns } from '../../API/chestShopsApi';

const ChestShops = () => {
  const classes = useStyles();

  // Filters
  const [server, setServer] = useState('all');
  const [tradeType, setTradeType] = useState('buy');
  const [sortBy, setSortBy] = useState('best-price');
  const [hideOutOfStockSigns, setHideOutOfStockSigns] = useState(true);
  const [hideFullShops, setHideFullShops] = useState(true);
  const [material, setMaterial] = useState(null);

  // Results
  const [loading, setLoading] = useState(false);
  const [signs, setSigns] = useState(undefined);
  const [pagination, setPagination] = useState(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    fetchChestShopSigns(
      page,
      server,
      tradeType,
      sortBy,
      hideOutOfStockSigns,
      hideFullShops,
      material
    ).then(({ currentPage, totalElements, results }) => {
      setPagination({ currentPage, totalElements });
      setSigns(results);
      setLoading(false);
    });
  }, [
    page,
    server,
    tradeType,
    sortBy,
    hideOutOfStockSigns,
    hideFullShops,
    material,
  ]);

  // Setters
  const onServerChange = (event) => {
    setServer(event.target.value);
    setPage(1);
  };

  const onTradeTypeChange = (event) => {
    setTradeType(event.target.value);
    setPage(1);
  };

  const onSortByChange = (event) => {
    setSortBy(event.target.value);
    setPage(1);
  };

  const onHideOutOfStockSignsChange = (event) => {
    setHideOutOfStockSigns(event.target.checked);
    setPage(1);
  };

  const onHideFullShopsChange = (event) => {
    setHideFullShops(event.target.checked);
    setPage(1);
  };

  const onMaterialChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setMaterial({
        name: newValue,
        value: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      setMaterial({
        name: newValue,
        value: newValue,
      });
    } else {
      setMaterial(newValue);
    }

    setPage(1);
  };

  const onPageChange = (event, newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className={classes.background}>
      <Container maxWidth='lg' className={classes.container}>
        <Filters
          tradeType={tradeType}
          setTradeType={onTradeTypeChange}
          server={server}
          setServer={onServerChange}
          hideOutOfStockSigns={hideOutOfStockSigns}
          setHideOutOfStockSigns={onHideOutOfStockSignsChange}
          hideFullShops={hideFullShops}
          setHideFullShops={onHideFullShopsChange}
          sortBy={sortBy}
          setSortBy={onSortByChange}
        />

        <ChestShopSignResults
          pagination={pagination}
          loading={loading}
          signs={signs}
          tradeType={tradeType}
          server={server}
          material={material}
          onMaterialChange={onMaterialChange}
          hideOutOfStockSigns={hideOutOfStockSigns}
          page={page}
          setPage={onPageChange}
        />
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#373737',
    minHeight: 'calc(110vh)',
    paddingTop: '50px',
    display: 'flex',

    '@media (max-width: 1030px)': {
      paddingTop: '0px',
    },
  },

  container: {
    display: 'flex',
    '@media (max-width: 1030px)': {
      display: 'block',
    },
  },
}));

export default ChestShops;
