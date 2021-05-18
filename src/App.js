import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import GithubState from './context/github/GithubState';


const App = () => {

    return(
        <GithubState>
            <Navbar />
            <Search />
        </GithubState>
    )
}

export default App;