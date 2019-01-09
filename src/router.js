
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'dva/router';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';

console.log(require('dva/router'));

const RouterConfig = () => {
    return (
        <Router >
            <Switch>
                <Route path="/blog" exact component={Main} />
                <Route path="/blog/login" exact component={Login} />
                <Route path="/blog/register" exact component={Register} />
            </Switch>
        </Router>
    );
};

export default RouterConfig;
