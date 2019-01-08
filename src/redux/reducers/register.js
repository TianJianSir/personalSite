const initialState = {
    name: '',
    password: '',
    confirmPassword: '',
    isRegistered: false
};

const ACTION = {
    REGISTER_INPUT(state, action){
        const { name, value } = action.payload;
        state[name] = value;

        return {
            ...state
        };
    },
    REGISTER_SUBMIT(state, action){
        const {res} = action;
        state.isRegistered = res.ret === 0;

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
