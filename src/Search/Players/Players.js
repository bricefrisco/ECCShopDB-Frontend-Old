import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Filters from './Filters/Filters';
import PlayerResults from './Results/PlayerResults/PlayerResults';

import { fetchPlayers } from '../../API/playersApi';

const Players = () => {
  const classes = useStyles();

  // Filters
  const [hideInactivePlayers, setHideInactivePlayers] = useState(false);
  const [name, setName] = useState(null);

  // Results
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState(undefined);
  const [pagination, setPagination] = useState(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchPlayers(page, name, hideInactivePlayers).then(
      ({ currentPage, totalPages, totalElements, results }) => {
        setPagination({ currentPage, totalPages, totalElements });
        setPlayers(results);
        setLoading(false);
      }
    );
  }, [page, name, hideInactivePlayers]);

  // Setters
  const onHideInactivePlayersChange = (event) => {
    setHideInactivePlayers(event.target.checked);
    setPage(1);
  };

  const onPageChange = (event, newPage) => {
    setPage(newPage + 1);
  };

  const onNameChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setName({
        name: newValue,
        value: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      setName({
        name: newValue,
        value: newValue,
      });
    } else {
      setName(newValue);
    }

    setPage(1);
  };

  return (
    <div className={classes.background}>
      <Container maxWidth='lg' className={classes.container}>
        <Filters
          hideInactivePlayers={hideInactivePlayers}
          setHideInactivePlayers={onHideInactivePlayersChange}
        />

        <PlayerResults
          hideInactivePlayers={hideInactivePlayers}
          name={name}
          setName={onNameChange}
          loading={loading}
          pagination={pagination}
          players={players}
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

export default Players;
