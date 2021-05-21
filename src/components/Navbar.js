import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <h3 className="nav-left">GITHUB FINDER</h3>
                <ul className="nav-right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </Fragment>

    )
}


export default Navbar;