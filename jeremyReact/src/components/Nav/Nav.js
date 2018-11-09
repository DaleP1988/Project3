import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (

    <nav className="blue-grey darken-4" role="navigation">
        <div className="nav-wrapper container">
            {/* <img className="img" id="logo" src="../../images/logo.png" alt="logo"/> */}
            <Link 
                className="brand-logo" id="logo-container" to="/">SAVE MY ASANA
            </Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><a>How it Works</a></li>
                <li><a>Log In</a></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><a className="waves-effect waves-light btn-small">Get Started</a></li>
            </ul>
            {/* <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        </div>
    </nav>
);

export default Nav;