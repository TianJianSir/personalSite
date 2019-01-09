import md5 from 'md5';
import API from '../api';

export default {
    namespace: 'register',
    state: {
        name: '',
        password: '',
        confirm_password: '',
        isRegister: false
    },

    subscriptions: {},

    effects: {
        *handleSubmit(action, { put, select }) {
            const state = yield select(state => state.register);
            const {name, password, confirm_password} = state;
            const data = {
                name,
                password: md5(password),
                confirm_password: md5(confirm_password)
            };
            const res = yield API.REQUEST('/api/user', 'POST', data);
            const isRegister = res.ret === 0;
            yield put({ type: 'refresh', payload:{isRegister} });
        },
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

};
