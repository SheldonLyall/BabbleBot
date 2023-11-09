import React from "react";
import logo from '../images/babblebot.png';
import './componentStyles.css';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <img className='logo' alt='Babblebot Robot' src={logo} />
            <ul className='link-list' >
                <a className='link' href="/home"><li>Home</li></a>
                <p>|</p>
                <a className='link' href="/about"><li>About</li></a>
                <p>|</p>
                <a className='link' href="/courses"><li>Courses</li></a>
                <p>|</p>
                <a className='link' href="/sign-up"><li>Sign Up</li></a>
            </ul>
        </nav>
    )
}