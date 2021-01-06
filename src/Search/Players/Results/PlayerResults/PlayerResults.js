import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopPanel from '../TopPanel/TopPanel';
import Players from './Players';
import BottomPagination from './BottomPagination';
import Loading from './Loading';

const PlayerResults = ({
  hideInactivePlayers,
  name,
  setName,
  loading,
  pagination,
  players,
  setPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.searchResults}>
      <TopPanel
        hideInactivePlayers={hideInactivePlayers}
        name={name}
        setName={setName}
        loading={loading}
        pagination={pagination}
        setPage={setPage}
      />

      {loading ? <Loading /> : <Players players={players} />}
      {!loading && pagination && (
        <BottomPagination
          page={pagination.currentPage}
          totalPages={pagination.totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  searchResults: {
    width: '100%',
    marginLeft: '100px',

    '@media(max-width: 1030px)': {
      marginLeft: '0px',
    },
  },
}));

export default PlayerResults;
