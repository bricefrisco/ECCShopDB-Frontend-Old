import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './home';
import { Navbar } from './shared/navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home'>
          <Navbar selectedPage='home' />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
