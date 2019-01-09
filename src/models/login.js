import md5 from 'md5';
import API from '../api';

export default {
    namespace: 'login',
    state: {
        name: '',
        password: '',
        isLogin: false
    },
    reducers: {
        handleInput(state, {value, name}) {
            state[name] = value;

            return {
                ...state
            };
        },
        refresh(state, {payload}) {
            return {
                ...state,
                ...payload
            };
        },
    },
    effects: {
        *handleSubmit(action, { put, select }) {
            const state = yield select(state => state.login);
            const {name, password} = state;
            const data = {
                name,
                password: md5(password)
            };
            const res = yield API.REQUEST('/api/user', 'PUT', data);
            const isLogin = res.ret === 0;
            yield put({ type: 'refresh', payload:{isLogin} });
        },
    },
};
