const initialState = {
    name: '',
    password: '',
    isLogin: false
};

const ACTION = {
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
    if(ACTION[action.type]){
        return ACTION[action.type](state, action);
    }

    return state;
}
