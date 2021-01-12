//React
import React from "react";
//Components
import AppointmentScheduler from "../appointment-scheduler/appointment-scheduler.component";
import ProfilePicture from "../profile-picture/profile-picture.component";
//Styles
import "./landing.styles.scss";

const Landing = () => (
  <section className="landing-container">
    {/* <div className="landing-background" /> */}
    <section className="landing">
      <div className="welcome">
        <h1 className="welcome-msg-ln1">INVEST IN YOUR HAIR.</h1>
        <h1 className="welcome-msg-ln2">
          IT'S THE ONLY <span className="crown">CROWN</span> YOU NEVER TAKE OFF!
        </h1>
      </div>
      <AppointmentScheduler />
    </section>
    <aside className="appointment-queue">
      <ProfilePicture mini imgUrl="https://placeimg.com/640/480" />
    </aside>
  </section>
);

export default Landing;
