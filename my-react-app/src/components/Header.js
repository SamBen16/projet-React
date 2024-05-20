import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_k from '../assets/Vector (3).png';
import logo_maison from '../assets/Group.png';
import logo_s from '../assets/Vector (4).png';
import logo_a from '../assets/Vector (5).png';

function Header() {
    return (
        <div className="style-header">
            <div className="logo">
                <img src={logo_k} alt="lettre k" />
                <img src={logo_maison} alt="logo maison" />
                <img src={logo_s} alt="lettre s" />
                <img src={logo_a} alt="lettre a" />
            </div>
            <nav>
                <ul className="nav-header">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">A propos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;