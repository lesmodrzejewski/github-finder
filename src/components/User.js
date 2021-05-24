import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    const { name, company, location, avatar_url, bio, followers, following, public_gists, public_repos, html_url, hireable} = user


    return (

        <Fragment>
            <div className="back-to-search">
                <Link to="/">Back to search</Link>
            </div>

            <div className="user-container">
                <div className="user-container-left">
                    <img src={avatar_url} alt={name} className="user-avatar-user" />
                    <h3>{name}</h3>
                    <h4>{company}</h4>
                    <h5>{location}</h5>
                    <p>{bio}</p>                            
                </div>

                <div className="user-container-right">
                    <h5>{html_url}</h5>
                    <h5>Hireable: {hireable}</h5>
                    <h5>{followers}</h5>
                    <h5>{following}</h5>
                    <h5>{public_gists}</h5>
                    <h5>{public_repos}</h5>

                </div>
            </div>

        </Fragment>

    );
};


export default User;