import React from 'react';
import './NavigationBar.css';
import { NavLink, useLocation } from 'react-router-dom';

function NavigationBar() {
    const location = useLocation();

    return (
        <nav className='navigation-bar'>
            <ul>
                <li className={location.pathname === "/home" ? 'active' : ''}>
                    <NavLink to="/home"
                    className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                    >
                        <h3>Beginning</h3></NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est.</p>
                </li>
                <li>
                    <NavLink to="/achievements"><h3>Achievements</h3></NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est.</p>
                </li>
                <li>
                    <NavLink to="/creations"><h3>Creations</h3></NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est.</p>
                </li>
                <li>
                    <NavLink to="/about"><h3>About Me</h3></NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est.</p>
                </li>
                <li>
                    <NavLink to="/LandingPage"><h3>Landing Page</h3></NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est.</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;