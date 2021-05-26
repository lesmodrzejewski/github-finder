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
                <button><Link to="/" className="back-to-search-link"><i class="fas fa-chevron-circle-left"></i>Back to search</Link></button>
            </div>

            <div className="user-container">
                <div className="user-container-left">
                    <img src={avatar_url} alt={name} className="user-avatar-user" />
                    <h3>{name}</h3>
                    <h4>{company}</h4>
                    <h5>{location}</h5>
                    <p className="bio-p">{bio}</p>                            
                </div>

                <ul className="user-container-right">

                    <div className="user-container-right-header">
                        <a className="user-container-right-header-a" href={html_url}><button className="user-container-right-header-button">Visit my website</button></a>
                    </div>

                    <div className="user-info-container">
                        <li className="user-container-right-item">Hireable: </li>
                        <li className="user-container-right-item">{isHirable}</li>
                        <li className="user-container-right-item">Followers:</li>
                        <li className="user-container-right-item">{followers}</li>
                        <li className="user-container-right-item">Following</li>
                        <li className="user-container-right-item">{following}</li>
                        <li className="user-container-right-item">Public Gists:</li>
                        <li className="user-container-right-item">{public_gists}</li>
                        <li className="user-container-right-item">Public Repos:</li>    
                        <li className="user-container-right-item">{public_repos}</li>    
                    </div>

                </ul>
            </div>

            <div className="user-repos">
                <div className="user-repos-container">
                    <div className="repos-header"><h2>Click to see repos: </h2></div>
                    <div className="repo-items">
                        <Repos repos={repos}/>
                    </div>                 
                </div>
            </div>

        </Fragment>

    );
};


export default User;