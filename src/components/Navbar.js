import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>

              <div className="nav-container">
                <h3 className="nav-left"><i className="fab fa-github-square github-nav"></i>Github Finder</h3>
                <ul className="nav-right">
                    <li><Link to='/' className="nav-right-item">Home</Link></li>
                    <li><Link to='/about' className="nav-right-item">About</Link></li>
                </ul>
                </div>  
        </Fragment>

    )
}


export default Navbar;