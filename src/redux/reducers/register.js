const initialState = {
    name: '',
    password: '',
    confirmPassword: '',
    isRegistered: false
};

const ACTION = {
    REGISTER_INPUT(state, action){
        const { name, value } = action.payload;

        return Object.assign({}, state, {
            [name]: value
        });
    },
    REGISTER_SUBMIT(state, action){
        const {res} = action;

        return Object.assign({}, state, {
            isRegistered: res.ret === 0
        });
    }
};

export default function(state = initialState, action) {
    if(ACTION[action.type]){
        return ACTION[action.type](state, action);
    }

    return state;
}
