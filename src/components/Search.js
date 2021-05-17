import React, {useState} from 'react';

const Search = ({ searchUsers }) => {

    const [text, setText] = useState('')
 
    const inputChange = (e) => {
        setText(e.target.value)

        // console.log(text)
    }

    const passTextToApp = (e) => {
        e.preventDefault()

        searchUsers(text)
         
    }


    return(
        <form onSubmit={passTextToApp} className="form-container">
            <label htmlFor="search-input">What user name are you looking for?</label>
            <br />
            <input onChange={inputChange} type="text" id="search-input" />
            <input type="submit" className="search-submit" value="Search!" />
        </form>
    )
}


export default Search;