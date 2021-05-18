import { SEARCH_USERS } from '../types';


export default (state, action) => {

    switch (action.type) {

        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
}