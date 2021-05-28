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

    const isHirable = hireable ? 'YES' : 'NO'


    return (

        <Fragment>
            <div className="back-to-search">
                <button><Link to="/" className="back-to-search-link"><i className="fas fa-chevron-circle-left"></i>Back to search</Link></button>
            </div>

            <div className="user-container">
                <div className="user-container-left">
                    <img src={avatar_url} alt={name} className="user-avatar-user" />
                    <h3>{name}</h3>
                    <h4>{company}</h4>
                    <h5>{location}</h5>
                    <p className="bio-p">{bio}</p>                            
                </div>

                <div className="user-container-right">

                    <div className="user-container-right-visit">
                        <a className="user-container-right-header-a" href={html_url}><button className="user-container-right-header-button">Visit my website</button></a>
                    </div>

                    <div className="user-info-container">
                            <p className="user-container-right-item">Hireable: </p>
                            <p className="user-container-right-item">{isHirable}</p>
                            <p className="user-container-right-item">Followers:</p>
                            <p className="user-container-right-item">{followers}</p>
                            <p className="user-container-right-item">Following</p>
                            <p className="user-container-right-item">{following}</p>
                            <p className="user-container-right-item">Public Gists:</p>
                            <p className="user-container-right-item">{public_gists}</p>
                            <p className="user-container-right-item">Public Repos:</p>    
                            <p className="user-container-right-item">{public_repos}</p>
                    </div>
                </div>

                
            </div>

            <div className="user-repos">
                        <div className="user-repos-container">
                            <div className="repos-header">
                                <h2>Click to see repos: </h2>
                            </div>
                            <div className="repo-items">
                            <Repos repos={repos}/>
                            </div>                 
                        </div>
            </div>

        </Fragment>

    );
};


export default User;