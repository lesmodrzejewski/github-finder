import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import { SEARCH_USERS } from '../types';

const GithubState = props => {

    const initialState = {
        users: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = async text => {

        const res = await axios.get(`https://api.github.com/search/users?q=${text}`)

        console.log(res);
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    return (
        <GithubContext.Provider 
            value={{
                users: state.users, 
                searchUsers
            }}
        >
    
            {props.children}

        </GithubContext.Provider>
    )
}

export default GithubState;