import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const TopPanel = ({ name }) => {
  const classes = useStyles();

  if (name === undefined) {
    return null;
  }

  return (
    <div className={classes.topPanel}>
      <Container maxWidth='lg'>
        <Link className={classes.link} to='/search/players'>
          <div className={classes.breadCrumb}>Players</div>
        </Link>
        <div className={`${classes.breadCrumb} ${classes.selected}`}>
          {name}
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  topPanel: {
    width: '100%',
    backgroundColor: '#323232',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',

    marginBottom: '50px',
  },

  link: {
    textDecoration: 'none',
  },

  breadCrumb: {
    color: 'rgba(255, 255, 255, 0.5)',
    display: 'inline-block',
    position: 'relative',
    padding: '11px 11px 11px 22px',
    height: '100%',
    alignItems: 'center',

    '&:hover': {
      color: 'rgba(107, 166, 94, 0.7)',
      cursor: 'pointer',
    },

    '&::before': {
      content: '" "',
      display: 'block',
      width: '0',
      height: '0',
      borderTop: '21px solid transparent',
      borderBottom: '21px solid transparent',
      borderLeft: '10px solid rgba(0, 0, 0, 0.3)',
      position: 'absolute',
      top: '50%',
      marginTop: '-21px',
      marginLeft: '1px',
      left: '100%',
      zIndex: '3',
    },

    '&::after': {
      content: '" "',
      display: 'block',
      width: '0',
      height: '0',
      borderTop: '21px solid transparent',
      borderBottom: '21px solid transparent',
      borderLeft: '10px solid #323232',
      paddingRight: '5px',
      position: 'absolute',
      top: '50%',
      marginTop: '-21px',
      left: '100%',
      zIndex: '3',
    },
  },

  selected: {
    color: '#6ba65e',

    '&:hover': {
      color: 'rgba(107, 166, 94, 1)',
      cursor: 'default',
    },
  },
}));

export default TopPanel;
