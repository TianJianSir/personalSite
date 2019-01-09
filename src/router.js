
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'dva/router';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import FrameContainer from './components/Frame';

const RouterConfig = ({app}) => {
    return (
        <Router>
            <Switch>
                <FrameContainer app={app}>
                    <Route path="/blog" exact component={Main} />
                    <Route path="/blog/login" exact component={Login} />
                    <Route path="/blog/register" exact component={Register} />
                </FrameContainer>
            </Switch>

        </Router>
    );
};

export default RouterConfig;
