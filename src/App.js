import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import Topics from './topics'

const APP = () => (
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
  </Router>
);

export default APP;
