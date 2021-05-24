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
        <div>
            <form onSubmit={searchUs} className="form-container">
                <label className="search-label" htmlFor="search-input">What user name are you looking for?</label>
                <input onChange={inputChange} type="text" id="search-input" />
                <input type="submit" className="search-submit" value="Search!" />
            </form>
            {githubContext.users.length > 0 && (<button onClick={githubContext.clearUsers}>Clear Users</button>)}
            {githubContext.users.length === 0 && ( <h3 className="search-ann">Please enter a user name above. If the user exist you will see it here</h3>)}
        </div>


    )
}


export default Search;