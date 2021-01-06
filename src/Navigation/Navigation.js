import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import NavigationButtons from './NavigationButtons';

const Navigation = ({ page }) => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <Container maxWidth='lg' className={classes.navBar}>
        <img
          src='/img/logo.png'
          alt='EcoCityCraft ShopDB Logo'
          className={classes.logo}
        />
        <NavigationButtons page={page} />
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  navigation: {
    width: '100%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: '#099cec'
    backgroundColor: '#242526',
  },

  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    height: '40px',
    width: '40px',
  },
}));

export default Navigation;
