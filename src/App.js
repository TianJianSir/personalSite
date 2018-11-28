import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Main from './pages/main'
import Detail from './pages/detail'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <Switch>
                  <Route path="/" exact component={Main}/>
                  <Route path="/detail" exact component={Detail}/>
              </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
