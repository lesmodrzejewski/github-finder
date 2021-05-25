import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repos from './Repos'
import GithubContext from '../context/github/githubContext';




const User = ({ match }) => {

    console.log(match);

    const githubContext = useContext(GithubContext)

    const { user, repos, getUser, getRepos } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        getRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

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
                    <h5 className="user-container-right-item">{html_url}</h5>
                    <h5 className="user-container-right-item">Hireable: {hireable}</h5>
                    <h5 className="user-container-right-item">Followers: {followers}</h5>
                    <h5 className="user-container-right-item">Following {following}</h5>
                    <h5 className="user-container-right-item">Public Gists:{public_gists}</h5>
                    <h5 className="user-container-right-item">Public Repos: {public_repos}</h5>
                </div>
            </div>

            <div className="user-repos">
                <div className="user-repos-container">
                    <h2>See Repos: </h2>
                    <Repos repos={repos}/>                    
                </div>
            </div>

        </Fragment>

    );
};


export default User;