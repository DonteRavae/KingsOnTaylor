//React
import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
//Components
import FormInput, { SelectFormInput } from "../form-input/form-input.component";
import ServicesMenuScroller from "../services-menu-scroller/services-menu-scroller.component";
//Styles
import "./appointment-form.styles.scss";

const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  barber: "",
  appointmentTime: "",
  service: "",
};

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  const [selected, setSelected] = useState(null);

  //Handle form input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //Handle service selection
  const handleSelection = (event) => {
    event.preventDefault();
    let op = event.currentTarget.getAttribute("data-key");
    setSelected(op);
    setFormValues({ ...formValues, service: op });
  };

  const submitForm = (event) => {
    //On submission, payment information modal or page redirect (card not charged until end of service)
    event.preventDefault();
    console.log(formValues);
  };

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
          value={formValues.barber}
          handleChange={handleChange}
          required
        />

        {/*Time slots filtered by times not selected throughout store hours in 30 minute intervals*/}

        <SelectFormInput
          name="appointmentTimes"
          values={["Choose A Time"]}
          value={formValues.appointmentTime}
          handleChange={handleChange}
          required
        />
      </div>

      <ServicesMenuScroller
        name="service"
        value={formValues.service}
        handleSelection={handleSelection}
        selected={selected}
      />

      <div className="btn-wrapper">
        <CustomButton title="Book Appointment" handleSubmit={submitForm} />
      </div>
    </form>
  );
};

export default AppointmentForm;
