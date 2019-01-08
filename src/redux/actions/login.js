import { LOGIN_INPUT, LOGIN_SUBMIT } from './actionTypes';
import API from '../../api';
import md5 from 'md5';

const loginInput = (name, value) => ({
    type: LOGIN_INPUT,
    payload: {
        name,
        value
    }
});

const loginSubmit = () => {
    return (dispatch, getState) => {
        const {login} = getState();
        const data = {
            name: login.name,
            password: md5(login.password)
        };
        API.REQUEST('/api/user', 'PUT', data).then((res) => {
            dispatch({type: LOGIN_SUBMIT, res});
        });
    };
};

export default {
    loginInput,
    loginSubmit
};
