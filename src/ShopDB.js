import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Analytics from './Analytics/Analytics';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';
import Region from './Search/Region/Region';
import Player from './Search/Player/Player';
import Home from './Home/Home';

const ShopDB = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Navigation page='home' />
          <Home />
        </Route>

        <Route exact path='/search/chest-shops'>
          <Navigation page='search' />
          <Search page='chest-shops' />
        </Route>

        <Route exact path='/search/regions'>
          <Navigation page='search' />
          <Search page='regions' />
        </Route>

        <Route exact path='/search/regions/:server/:name'>
          <Navigation page='search' />
          <Region />
        </Route>

        <Route exact path='/search/players'>
          <Navigation page='search' />
          <Search page='players' />
        </Route>

        <Route exact path='/search/players/:name'>
          <Navigation page='search' />
          <Player />
        </Route>

        <Route exact path='/api'>
          <Navigation page='api' />
        </Route>

        <Route path='/search'>
          <Redirect to='/search/chest-shops' />
        </Route>

        <Route exact path='/analytics'>
          <Navigation page='home' />
          <Analytics />
        </Route>

        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Router>
  );
};

export default ShopDB;
