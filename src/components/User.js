import React, { Fragment, useContext, useEffect } from 'react';
import GithubContext from '../context/github/githubContext';




const User = ({ match }) => {

    console.log(match);

    const githubContext = useContext(GithubContext)

    const { user, getUser } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        // eslint-disable-next-line
    }, [ ])

    console.log(user);

    const { name, company, location } = user


    return (

        <Fragment>

            <div className="user-left-side">
                <h3>{name}</h3>
                <h4>{company}</h4>
                <h5>{location}</h5>                            
            </div>



            <div className="user-right-side">

            </div>

        </Fragment>

    );
};


export default User;