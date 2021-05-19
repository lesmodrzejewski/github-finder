import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import GithubState from './context/github/GithubState';
import Users from './components/Users'


const App = () => {

    return(
        <GithubState>
            <Navbar />
            <Search />
            <Users />
        </GithubState>
    )
}

export default App;