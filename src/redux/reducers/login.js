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
    async LOGIN_SUBMIT(state, action){
        // todo 异步处理
        const { name, password } = state;
        const data = {
            name,
            password: md5(password)
        };
        const res = await API.REQUEST('/api/user', 'PUT', data);

        if(res.ret !== 0){
            notification.error({
                message: '错误信息',
                description: '输入的账号或密码错误'
            });
        }else{
            notification.success({
                message: '成功信息',
                description: '登陆成功,以后会跳到首页去，敬请谅解'
            });
            state.isLogin = true;
        }

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

    // switch (action.type) {
    // case LOGIN_INPUT: {

    // }
    // case LOGIN_SUBMIT: {

    // }
    // default:
    //     return state;
    // }
}
