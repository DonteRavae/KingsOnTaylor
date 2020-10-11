//React
import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
//Components
import FormInput, { SelectFormInput } from "../form-input/form-input.component";
import ServicesMenuScroller from "../services-menu-scroller/services-menu-scroller.component";
//Styles
import "./appointment-form.styles.scss";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    barber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitForm = event => {

  }

  return (
    <form className="appointment-form">
      <header className="appointment-form-header">
        <h3>NEED A CUT TODAY?</h3>
        <h5>Book an appointment with us below!</h5>
      </header>
      <div className="name-inputs">
        <FormInput
          name="firstName"
          type="text"
          value={formValues.firstName}
          label="First Name"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="lastName"
          type="text"
          value={formValues.lastName}
          label="Last Name"
          handleChange={handleChange}
          required
        />
      </div>
      <FormInput
        name="phoneNumber"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={formValues.phoneNumber}
        label="Phone Number"
        handleChange={handleChange}
        format="Format: 803-555-5555"
        required
      />
      <div className="barbers-and-times">
        <SelectFormInput
          name="barber"
          values={["Choose A Barber", "tremaine", "lee", "dante"]}
          required
        />
        <SelectFormInput
          name="appointmentTimes"
          values={["Choose A Time"]}
          required
        />
      </div>

      <ServicesMenuScroller />

      <div className="btn-wrapper">
        <CustomButton title="Book Appointment" handleSubmit={submitForm} />
      </div>
    </form>
  );
};

export default AppointmentForm;
