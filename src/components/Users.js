import React, { useContext } from 'react'
import GithubContext from '../context/github/githubContext';
import UserItem from './UserItem'


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { users } = githubContext

    return (    
        users.map(user => <UserItem key={user.id} user={user}/>)
    )

}

export default Users