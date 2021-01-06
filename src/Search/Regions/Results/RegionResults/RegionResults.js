import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopPanel from '../TopPanel/TopPanel';
import Regions from './Regions';
import BottomPagination from './BottomPagination';
import Loading from './Loading';

const RegionResults = ({
  server,
  hideDisabledRegions,
  name,
  setName,
  loading,
  pagination,
  regions,
  setPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.searchResults}>
      <TopPanel
        server={server}
        hideDisabledRegions={hideDisabledRegions}
        name={name}
        setName={setName}
        loading={loading}
        pagination={pagination}
        setPage={setPage}
      />

      {loading ? <Loading /> : <Regions regions={regions} server={server} />}
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

export default RegionResults;
