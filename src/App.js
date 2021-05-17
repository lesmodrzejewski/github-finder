import axios from 'axios';
import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import Search  from './components/Search'


const App = () => {


    const searchUsers = async text => {

        const res = await axios.get(`https://api.github.com/search/users?q=${text}`)

        console.log(res);
    }

    return(

        <Fragment>
            <Navbar />
            <Search searchUsers={searchUsers}/>
        </Fragment>

    )
}

export default App;