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

        if(!text) {
            alertContext.setAlert('Please enter something')
        } else {
            githubContext.searchUsers(text)
        }

        
    }


    return(
        <form onSubmit={searchUs} className="form-container">
            <label htmlFor="search-input">What user name are you looking for?</label>
            <br />
            <input onChange={inputChange} type="text" id="search-input" />
            <input type="submit" className="search-submit" value="Search!" />
        </form>
    )
}


export default Search;