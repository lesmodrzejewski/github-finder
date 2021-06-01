import React from 'react'


const RepoItem = ({ repo }) => {
    return(
        <div className="repo-items">
            <a href={repo.html_url} className="repo-item">{repo.name}</a>
        </div>
    )
}

export default RepoItem