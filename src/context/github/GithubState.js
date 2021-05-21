import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import { SEARCH_USERS, GET_USER } from '../types';

const GithubState = props => {

    const initialState = {
        users: [],
        user: [],
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

    const getUser = async username => {

        const res = await axios.get(
            `https://api.github.com/users/${username}`
          );
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    return (
        <GithubContext.Provider 
            value={{
                users: state.users,
                user: state.user,
                searchUsers,
                getUser
            }}
        >
    
            {props.children}

        </GithubContext.Provider>
    )
}

export default GithubState;