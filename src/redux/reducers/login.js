import API from '../../api';
import { notification } from 'antd';
import md5 from 'md5';

const initialState = {
    name: '',
    password: '',
    isLogin: false
};

const actionType = {
    LOGIN_INPUT(state, action){
        const { name, value } = action.payload;
        state[name] = value;

        return {
            ...state
        };
    },
    LOGIN_SUBMIT(state, action){
        const {res} = action;
        state.isLogin = res.ret === 0;

        return {
            ...state
        };
    }
};

export default function(state = initialState, action) {
    if(actionType[action.type]){
        return actionType[action.type](state, action);
    }

    return state;
}
