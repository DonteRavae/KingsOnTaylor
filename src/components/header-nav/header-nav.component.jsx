//React
import React from 'react';
//Styles
import './header-nav.styles.scss';

const HeaderNav = () => (
    <header className="header-nav">
        <nav className="nav-link">Home</nav>
        <nav className="nav-link">Barbers</nav>
        <nav className="nav-link brand">King's Barbershop</nav>
        <nav className="nav-link">Client Hub</nav>
        <nav className="nav-link">Make An Appointment</nav>
    </header>
);

export default HeaderNav;