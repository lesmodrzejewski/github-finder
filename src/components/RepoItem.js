import React, {Fragment} from 'react'


const RepoItem = ({ repo }) => {
    return(
        <div className="repo-item">
            <a href={repo.html_url} className="repo-item">{repo.name}</a>
        </div>
    )
}

export default RepoItem