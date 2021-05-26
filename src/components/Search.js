import React, {useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('')
 
    const inputChange = (e) => {
        setText(e.target.value)

        console.log(text)
    }

    const searchUs = (e) => {
        e.preventDefault()

        if(text === '') {
            alertContext.setAlert('Please enter something')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }

        
    }

    return(
        <div className="form-container">
            <form onSubmit={searchUs}>
                <i class="fab fa-github-square github-search"></i>
                <br />
                <label className="search-label" htmlFor="search-input"></label>
                <br />
                <input onChange={inputChange} type="text" id="search-input" placeholder="What user name are you searching for?" />
                <input type="submit" className="search-submit" value="Search!" />
            </form>

            {githubContext.users.length > 0 && (<button onClick={githubContext.clearUsers} className="clear-users-button">Clear Users</button>)}

            {githubContext.users.length === 0 && (<h3 className="search-ann">Please enter a Github user name above to see results below</h3>)}
        </div>


    )
}


export default Search;