import React from 'react';
import './Character.css';
import CharacterImage from '../../assets/img/Character.png';
import {Link} from 'react-router-dom';

function Character() {
    return (
        <div className='character-overview'>
            <img src={CharacterImage} alt='a character that repesents me'/>
            <div>
                <p>Name</p>
                <h4>Sietse Nijdam</h4>
            </div>
            <div>
                <p>Occupation</p>
                <h4>IT Servicedesk</h4>
            </div>
            <div>
                <p>Corporation</p>
                <h4>Vomar voordeelmarkt</h4>
            </div>
            <div>
                <p>availability</p>
                <h4><Link to="/openforhire" className='overview-button-01'>Open for Hire</Link></h4>
            </div>
            <div>
                <p>Social</p>
                <h4><Link to="/openConection" className='overview-button-02'>Open Connection</Link></h4>
            </div>
        </div>
    )
}

export default Character;