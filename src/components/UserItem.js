import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url, } }) => {
    return(
        <div className="user-item-container">
            <img className="user-item-avatar" src={avatar_url} alt={login} />
            <h2 className='user-item-name'>{login}</h2>
            <button className=""><Link className="user-item-button-font" to={`/user/${login}`}>More</Link></button>
        </div>
    )

}


export default UserItem;