//React
import React from "react";
//Components
import ProfilePicture from "../profile-picture/profile-picture.component";
//Styles
import "./client-portal.styles.scss";

const ClientPortal = ({ currentUser }) => {
  const { imgUrl } = currentUser;

  return (
    <main className="client-portal">
      <section className="user-profile">
        {/* Profile Picture */}
        <ProfilePicture imgUrl={imgUrl} />
        {/* User Details */}
      </section>
      <section className="user-dashboard">
        {/* Photo Gallery */}
        {/* Appointments/Appointment Calender */}
        {/* Payment Profile */}
        {/* Reviews */}
      </section>
    </main>
  );
};

export default ClientPortal;
