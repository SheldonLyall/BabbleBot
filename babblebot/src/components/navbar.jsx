import React from "react";
import logo from '../babblebot.png';

export default function Navbar() {

    const linkStyle = {
        textDecoration: 'none',
        fontSize: '15px',
        color: 'white'
    }

    return (
        <div>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', backgroundColor: '#292F36', margin: '0', height: '60px', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
                    <a style={linkStyle} href="/home"><li>Home</li></a>
                    <a style={linkStyle} href="/about"><li>About</li></a>
                    <a style={linkStyle} href="/courses"><li>Courses</li></a>
                    <a style={linkStyle} href="/sign-up"><li>Sign Up</li></a>
                    <img alt='Babblebot Robot' src={logo} style={{ height: '70px', paddingLeft: '920px' }}/>
                </ul>
            </nav>
        </div>
    )
}