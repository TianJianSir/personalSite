import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/blog" exact component={Main} />
                        <Route path="/blog/login" exact component={Login} />
                        <Route path="/blog/register" exact component={Register} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
