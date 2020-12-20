//React
import React from "react";
//Components
// import AppointmentForm from "../appointment-form/appointment-form.component";
//Styles
import "./landing.styles.scss";

const Landing = () => (
  <section className="landing-container">
    <div className="landing-background" />
    <fragment className="landing">
      <div className="welcome">
        <h1 className="welcome-msg">
          Life Isn't Perfect, But Your Hair Can Be!
        </h1>
      </div>
      {/*    <AppointmentForm /> */}
    </fragment>
    <aside className="appointment-queue"></aside>
  </section>
);

export default Landing;
