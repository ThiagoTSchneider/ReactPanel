import React from 'react';
import './Navbar.css';
import img from './teste1bg.png';

function Navbar() {
    return (
        <>
            <nav>
                <a href="index.html" className="logo-container">
                    <img src={img} alt="Logo" />
                </a>
                <div>
                    <ul id='navbar'>
                        <li><a href="index.html">Status </a></li>
                        <li><a href="index.html">Filter </a></li>
                        <li><a href="index.html">Memory </a></li>
                        <li><a href="index.html">API </a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
