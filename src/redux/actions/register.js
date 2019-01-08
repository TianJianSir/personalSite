import { REGISTER_INPUT, REGISTER_SUBMIT } from './actionTypes';
import API from '../../api';
import md5 from 'md5';

const registerInput = (name, value) => ({
    type: REGISTER_INPUT,
    payload: {
        name,
        value
    }
});

const registerSubmit = () => {
    return (dispatch, getState) => {
        const {register} = getState();

        const data = {
            name: register.name,
            password: md5(register.password),
            confirm_password: md5(register.confirmPassword)
        };
        API.REQUEST('/api/user', 'POST', data).then((res) => {
            dispatch({type: REGISTER_SUBMIT, res});
        });
    };
};

export default {
    registerInput,
    registerSubmit
};
