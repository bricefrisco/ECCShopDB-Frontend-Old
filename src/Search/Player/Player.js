import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';

import SearchNavigation from '../SearchNavigation';
import Loading from './Loading';
import TopPanel from './TopPanel/TopPanel';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import ChestShopSigns from './ChestShops/ChestShopSigns';
import Regions from './Towns/Regions';

import { fetchPlayer } from '../../API/playersApi';

const Player = () => {
  const classes = useStyles();
  const materialClasses = useMaterialStyles();
  const { name } = useParams();

  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState(undefined);

  const [error, setError] = useState(false);
  const [page, setPage] = useState('1');

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchPlayer(name)
      .then((response) => {
        setPlayer(response);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [name]);

  if (loading) {
    return (
      <>
        <SearchNavigation page='players' />
        <div className={classes.loadingBackground}>
          <TopPanel name={name} />
          <Container maxWidth='lg'>
            <Loading />
          </Container>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SearchNavigation page='players' />
        <div className={classes.loadingBackground}>
          <TopPanel name={name} />
          <Container maxWidth='lg'>
            <span className={classes.invalidServer}>Player not found.</span>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchNavigation page='players' />
      <div className={classes.background}>
        <TopPanel name={name} />
        <Container maxWidth='lg'>
          <div className={classes.flex}>
            <PlayerInfo player={player} />
            <AdditionalInfo player={player} />
          </div>
        </Container>

        <TabContext value={page}>
          <Paper square>
            <TabList
              centered
              onChange={(event, newChange) => setPage(newChange)}
              classes={materialClasses}
            >
              <Tab label='Towns' value='1' />
              <Tab label='Items sold' value='2' />
              <Tab label='Items Purchased' value='3' />
            </TabList>

            <TabPanel value='1' className={classes.panel}>
              <Regions player={player} />
            </TabPanel>

            <TabPanel value='2' className={classes.panel}>
              <ChestShopSigns player={player} tradeType='buy' />
            </TabPanel>

            <TabPanel value='3' className={classes.panel}>
              <ChestShopSigns player={player} tradeType='sell' />
            </TabPanel>
          </Paper>
        </TabContext>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#373737',

    '@media (max-width: 1030px)': {
      paddingTop: '0px',
    },
  },

  loadingBackground: {
    minHeight: 'calc(100vh)',
    backgroundColor: '#373737',
  },

  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '@media (max-width: 888px)': {
      flexDirection: 'column',
      marginBottom: '40px',
    },
  },

  panel: {
    padding: '0',
  },

  invalidServer: {
    fontSize: '20px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const useMaterialStyles = makeStyles(() => ({
  root: {
    '& .MuiTabs-scroller.MuiTabs-fixed': {
      backgroundColor: '#373737',
      paddingTop: '40px',
    },

    '& .MuiTab-wrapper': {
      color: 'rgba(255, 255, 255, 0.7)',
    },

    '& .MuiTabs-indicator': {
      backgroundColor: '#6ba65e',
    },

    '& .Mui-selected': {
      color: '#6ba75e',
    },

    '& .Mui-selected > span': {
      color: '#6ba75e',
    },

    '& .MuiTabPanel-root': {
      padding: '0',
    },
  },
}));

export default Player;
