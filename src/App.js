import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState'
import Users from './components/Users';
import Alert from './components/Alert';


const App = () => {

    return(
        <GithubState>
            <AlertState>
                <Navbar />
                <Alert />
                <Search />
                <Users />
            </AlertState>
        </GithubState>
    )
}

export default App;