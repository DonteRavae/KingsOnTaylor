//React
import React from "react";
import { Link } from "react-router-dom";
// import BarbersPage from "../../pages/barbers-page/barbers.pages";
//Styles
import "./header-nav.styles.scss";

const HeaderNav = () => (
  <header className="header-nav">
    <div className="link-container">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </div>
    <div className="link-container">
      <Link to="/barbers" className="nav-link">
        Barbers
      </Link>
    </div>
    <div className="link-container">
      <Link to="/" className="nav-link brand">
        King's Barbershop
      </Link>
    </div>
    <div className="link-container">
      <Link to="/bookAppointment" className="nav-link">
        Make An Appointment
      </Link>
    </div>
    <div className="link-container">
      <Link to="/clientHub" className="nav-link">
        Client Hub
      </Link>
    </div>
  </header>
);

export default HeaderNav;
