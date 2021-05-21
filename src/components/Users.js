import React, { Fragment, useContext } from 'react'
import GithubContext from '../context/github/githubContext';
import UserItem from './UserItem'


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { users } = githubContext

    return (
        <div className="users-container">
            {users.map(user => <UserItem key={user.id} user={user}/>) }
        </div>
           
    )

}

export default Users