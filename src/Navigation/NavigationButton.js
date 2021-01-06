import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const NavigationButton = ({ text, selected }) => {
  const classes = useStyles();

  const getButtonText = (text) => {
    switch (text) {
      case 'search':
        return 'Search';
      default:
        return 'Home';
    }
  };

  const getNavigationUri = (text) => {
    switch (text) {
      case 'search':
        return '/search/chest-shops';
      default:
        return '/home';
    }
  };

  if (text === 'forum') {
    return (
      <a
        href='https://ecocitycraft.com/forum/threads/shopdb-applications-suggestions-bug-reports-feedback-faq.205318/'
        rel='noopener noreferrer'
        target='_blank'
        className={classes.link}
      >
        <div className={classes.navigationButton}>
          <Typography className={classes.text}>Forum</Typography>
        </div>
      </a>
    );
  }

  return (
    <Link to={getNavigationUri(text)} className={classes.link}>
      <div className={classes.navigationButton}>
        <Typography className={selected ? classes.textSelected : classes.text}>
          {getButtonText(text)}
        </Typography>
      </div>
    </Link>
  );
};

const useStyles = makeStyles(() => ({
  navigationButton: {
    marginLeft: '15px',
    marginRight: '15px',
  },

  text: {
    fontWeight: '500',
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.8)',

    '&:hover': {
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.95)',
    },
  },

  textSelected: {
    fontWeight: '500',
    fontSize: '15px',
    color: '#6ba65e',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  link: {
    textDecoration: 'none',
  },
}));

export default NavigationButton;
