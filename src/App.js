import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import { Facebook } from 'react-content-loader'

const Loading = () => <Facebook/>;

const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./about'),
  loading: Loading,
});

const Topics = Loadable({
  loader: () => import('./topics'),
  loading: Loading,
});

const APP = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
  </Router>
);

export default APP;
