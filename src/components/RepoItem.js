import React, {Fragment} from 'react'


const RepoItem = ({ repo }) => {
    return(
        <div className="repo-item">
            <h5><a href={repo.html_url}>{repo.name}</a></h5>
        </div>
    )
}

export default RepoItem