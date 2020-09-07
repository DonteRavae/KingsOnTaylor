//React
import React from 'react';
//Components
import AppointmentForm from '../appointment-form/appointment-form.component';
//Styles
import './landing.styles.scss';

const Landing = () => (
    <section className="landing">
        <div className="landing-background" />
        <AppointmentForm />
    </section>
);

export default Landing;