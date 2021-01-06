import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import StoreIcon from '@material-ui/icons/Store';
import PersonIcon from '@material-ui/icons/Person';

const SearchNavigation = ({ page }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchNavigation}>
      <Container maxWidth='lg'>
        <div className={classes.searchNavigationButtons}>
          <Link to='/search/chest-shops' className={classes.link}>
            <div
              className={
                page === 'chest-shops'
                  ? classes.searchNavigationButtonSelected
                  : classes.searchNavigationButton
              }
            >
              <LocalGroceryStoreIcon className={classes.icon} />
              <Typography
                className={
                  page === 'chest-shops'
                    ? classes.searchNavigationButtonSelectedText
                    : classes.searchNavigationButtonText
                }
              >
                Chest Shops
              </Typography>
            </div>
          </Link>

          <Link to='/search/regions' className={classes.link}>
            <div
              className={
                page === 'regions'
                  ? classes.searchNavigationButtonSelected
                  : classes.searchNavigationButton
              }
            >
              <StoreIcon className={classes.icon} />
              <Typography
                className={
                  page === 'regions'
                    ? classes.searchNavigationButtonSelectedText
                    : classes.searchNavigationButtonText
                }
              >
                Regions
              </Typography>
            </div>
          </Link>

          <Link to='/search/players' className={classes.link}>
            <div
              className={
                page === 'players'
                  ? classes.searchNavigationButtonSelected
                  : classes.searchNavigationButton
              }
            >
              <PersonIcon className={classes.icon} />
              <Typography
                className={
                  page === 'players'
                    ? classes.searchNavigationButtonSelectedText
                    : classes.searchNavigationButtonText
                }
              >
                Players
              </Typography>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  searchNavigation: {
    boxShadow: '0 1px 0 0 rgba(0, 0, 0, .05), 0 2px 4px 0 rgba(0, 0, 0, .06)',
    backgroundColor: '#323232',
  },

  searchNavigationButtons: {
    display: 'flex',
    height: '64px',
    alignItems: 'center',
  },

  searchNavigationButton: {
    height: '59px',

    display: 'flex',
    alignItems: 'center',

    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px',

    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.8)',

    borderBottom: '2px solid rgba(0, 0, 0, 0)',

    '&:hover': {
      cursor: 'pointer',
      color: '#6ba65e',
    },
  },

  searchNavigationButtonSelected: {
    height: '59px',

    display: 'flex',
    alignItems: 'center',

    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px',

    paddingLeft: '15px',
    paddingRight: '15px',

    borderBottom: '2px solid #6ba65e',

    color: '#6ba65e',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  searchNavigationButtonText: {
    fontSize: '15px',
  },

  searchNavigationButtonSelectedText: {
    fontSize: '15px',
    fontWeight: '500',
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
  },

  icon: {
    marginRight: '5px',
    fontSize: '20px',

    '@media (max-width: 420px)': {
      display: 'none',
    },
  },
}));

export default SearchNavigation;
