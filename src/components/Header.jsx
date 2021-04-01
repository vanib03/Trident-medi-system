import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import HeaderStyles from '../css/Header.module.css';
import Icon from '../assets/images/icon.png';

function Header ( { pageName } ) {

    const history = useHistory();

    const home = () => {

        history.push( '/' );
    }

    const contact = () => {

        history.push( '/contactUs' );
    }

    const products = () => {

        history.push( '/products' );
    }

    const about = () => {

        history.push( '/about' );
    }

    return (

        <nav className={HeaderStyles.headerContainer}>
            <div className={HeaderStyles.headerL}>
                <img src={Icon} className={HeaderStyles.logo} /> <span className={HeaderStyles.companyName}> TRIDENT MEDI SYSTEM</span>
            </div>
            <div className={HeaderStyles.MenuOptions}>
                <span className={`${HeaderStyles.MenuOption} ${pageName === 'home' ? `${HeaderStyles.activeNavLink}` : ''}`} onClick={home}>Home</span>
                <span className={`${HeaderStyles.MenuOption} ${pageName === 'products' ? `${HeaderStyles.activeNavLink}` : ''}`} onClick={products}>Products</span>
                <span className={`${HeaderStyles.MenuOption} ${pageName === 'about' ? `${HeaderStyles.activeNavLink}` : ''}`} onClick={about}>About Us</span>
                <span className={`${HeaderStyles.MenuOption} ${pageName === 'contactUs' ? `${HeaderStyles.activeNavLink}` : ''}`} onClick={contact}>Contact Us </span>
            </div>
        </nav >
    )
}

export default Header
