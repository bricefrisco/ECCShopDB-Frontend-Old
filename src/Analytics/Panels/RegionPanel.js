import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import RealTimeEvent from '../Events/RealTimeEvent';
import { getRegionAnalytics } from '../../API/analytics';
import TopPagination from './TopPagination';

const RegionPanel = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    getRegionAnalytics(page, 25).then((response) => {
      setEvents(response.results);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalElements: response.totalElements,
      });
      setLoading(false);
    });
  }, [page]);

  const onPageChange = (event, newPage) => {
    setPage(newPage + 1);
  };

  if (loading || !events) {
    return <div className={classes.container}>Loading.</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Region events</h1>
      <TopPagination
        setPage={onPageChange}
        labelTextEnd={'region events'}
        page={page}
        pagination={pagination}
      />
      {events.map((event, idx) => (
        <RealTimeEvent key={idx} event={event} />
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginLeft: '100px',
  },

  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
  },
});

export default RegionPanel;
