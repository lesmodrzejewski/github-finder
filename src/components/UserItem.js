import React from 'react';

const UserItem = ({ user }) => {
    return(
        <div>
            <h6>{user.login}</h6>
            <p>{user.html_url}</p>
        </div>
    )

}


export default UserItem;