import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='home-link' to='/'>
                <i class="fab fa-reddit"></i>
                <p className='link-description'>RedditDark</p>
            </Link>
        </nav>
    )
}

export default Navbar;