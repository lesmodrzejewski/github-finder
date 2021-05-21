import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return(
        <div className="user-container">
            <img className="user-avatar" src={avatar_url} alt={login} />
            <h2 className='user-name'>{login}</h2>
            <button><Link to={`/user/${login}`}>More</Link></button>
        </div>
    )

}


export default UserItem;