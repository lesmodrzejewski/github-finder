import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState'
import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Users from './components/Users';
import Home from './components/Home'
import Alert from './components/Alert';
import User from './components/User'
import About from './components/About'

import './App.css';


const App = () => {

    return(
        <GithubState>
            <AlertState>
                <Router>
                    <div>
                        <Navbar />
                        <div>
                            <Alert />
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/user/:login' component={User} />
                            </Switch>   
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    )
}

export default App;