import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h3 className={classes.title}>Search</h3>
      <p className={classes.description}>
        Ready to get the best prices? Well, go{' '}
        <Link to='/search/chest-shops' className={classes.link}>
          search
        </Link>{' '}
        for them!
      </p>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#373737',
    paddingTop: '100px',
    paddingBottom: '100px',
    color: 'rgba(255, 255, 255, 0.7)',
  },

  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '300',
  },

  description: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.25rem',
    lineHeight: '1.7',
  },

  bold: {
    fontWeight: '500',
  },

  link: {
    textDecoration: 'none',
    color: '#3498db',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default Search;
