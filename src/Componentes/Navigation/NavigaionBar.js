import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Beginning</Link>
                </li>
                <li>
                    <Link to="/achievements">Achievements</Link>
                </li>
                <li>
                    <Link to="/creations">Creations</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;