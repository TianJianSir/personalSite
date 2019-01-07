import { SET_FILTER } from '../actionTypes';

const visibilityFilter = (state = {}, action) => {
    switch (action.type) {
    case SET_FILTER: {
        console.log('this is setfilter');

        return {};
        // return action.payload.filter;
    }
    default: {
        return state;
    }
    }
};

export default visibilityFilter;
