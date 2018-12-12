import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from './pages/main';
import Detail from './pages/detail';
import './App.scss';

class App extends Component {
    componentDidMount() {
        console.log('app didmount');
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/blog" exact component={Main} />
                        <Route path="/blog/login" exact component={Detail} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
