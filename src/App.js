import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './home';
import { Navbar } from './shared/navbar';
import { SearchNavbar } from './shared/search-navbar/SearchNavbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home'>
          <Navbar selectedPage='home' />
          <Home />
        </Route>

        <Route exact path='/search/chest-shops'>
          <Navbar selectedPage='search' />
          <SearchNavbar selectedPage='chest-shops' />
        </Route>

        <Route exact path='/search/regions'>
          <Navbar selectedPage='search' />
          <SearchNavbar selectedPage='regions' />
        </Route>

        <Route exact path='/search/players'>
          <Navbar selectedPage='search' />
          <SearchNavbar selectedPage='players' />
        </Route>

        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
