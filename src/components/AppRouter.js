import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import TrumpTweetTracker from './TrumpTweetTracker';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TrumpTweetTracker} exact={true}/>
      <Route path="/:id" component={TrumpTweetTracker}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
