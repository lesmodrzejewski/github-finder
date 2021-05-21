import { SEARCH_USERS, GET_USER } from '../types';


export default (state, action) => {

    switch (action.type) {

        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}