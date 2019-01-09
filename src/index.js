import dva from 'dva';
import createLoading from 'dva-loading';
import {createBrowserHistory as createHistory} from 'history';

import login from './models/login';
import register from './models/register';
import router from './router';

import * as serviceWorker from './serviceWorker';

// 1. Initialize
// 初始化dva对象的时候,要是传空的话，即使用了BrowserRouter URL后面还是会加上#/ 很丑
const app = dva({
    history: createHistory()
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(login);
app.model(register);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

serviceWorker.unregister();
