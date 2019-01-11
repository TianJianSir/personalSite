const initialState = {
    name: '',
    password: '',
    isLogin: false
};

const ACTION = {
    LOGIN_INPUT(state, action){
        const { name, value } = action.payload;

        return Object.assign({}, state, {
            [name]: value
        });
    },
    LOGIN_SUBMIT(state, action){
        const {res} = action;

        return Object.assign({}, state, {
            isLogin: res.ret === 0
        });
    }
};

export default function(state = initialState, action) {
    if(ACTION[action.type]){
        return ACTION[action.type](state, action);
    }

    return state;
}
