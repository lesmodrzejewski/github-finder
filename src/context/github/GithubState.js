import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS } from '../types';

const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        repos: []
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

        console.log(res);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const getRepos = async username => {
        
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=9&sort=created:asc`
        )

        console.log(res)

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    return (
        <GithubContext.Provider 
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                searchUsers,
                getUser,
                getRepos,
                clearUsers
            }}
        >
    
            {props.children}

        </GithubContext.Provider>
    )
}

export default GithubState;