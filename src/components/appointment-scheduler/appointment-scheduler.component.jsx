//React
import React from "react";
//Component
import CustomButton from "../custom-button/custom-button.component";
//Styles
import "./appointment-scheduler.styles.scss";

const AppointmentScheduler = () => {
  return (
    <form className="appointment-scheduler">
      <h1>Life is perfect but your hair can be!</h1>
      <span>Schedule an appointment today!</span>
      <section className="barber-and-time-container">
        <select
          className="barber-and-time-options"
          name="barber"
          id="barberSelection"
        >
          <option value="Choose A Barber" className="barber-options">
            Choose A Barber
          </option>
        </select>
        <select
          className="barber-and-time-options"
          name="apptTime"
          id="apptTimeSelection"
        >
          <option value="Choose A Time" className="apptTime-options">
            Choose An Appointment Time
          </option>
        </select>
      </section>
      <CustomButton title="Schedule An Appointment Today!" />
      {/* <button className="submit-appt-btn">Schedule An Appointment</button> */}
    </form>
  );
};

export default AppointmentScheduler;
