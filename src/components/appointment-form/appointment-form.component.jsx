//React
import React, { useState, useEffect } from "react";
import CustomButton from "../custom-button/custom-button.component";
//Components
import FormInput, { SelectFormInput } from "../form-input/form-input.component";
import ServicesMenuScroller from "../services-menu-scroller/services-menu-scroller.component";
//Async & Utilities
import axios from "axios";
//Styles
import "./appointment-form.styles.scss";

//Constants
const TODAY = new Date().getDay();
const OPEN_TIME = new Date(new Date().setHours(9, 0, 0, 0));
const CLOSE_TIME =
  TODAY === 6
    ? new Date(new Date().setHours(15, 0, 0, 0))
    : TODAY > 1 && TODAY < 6
    ? new Date(new Date().setHours(18, 0, 0, 0))
    : new Date(new Date().setHours(9, 0, 0, 0));
const INCREMENT_VALUE = 1800000;
const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  barber: "",
  appointmentTime: 0,
  service: "",
};

const AppointmentForm = () => {
  //----Form Input Values----//
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [formTimeValue, setFormTimeValue] = useState("");
  const [selected, setSelected] = useState(null);
  const [timeSlots, setTimeSlots] = useState({ "Choose A Value": null });

  useEffect(() => {
    let open = OPEN_TIME.getTime();
    let close = CLOSE_TIME.getTime();
    let tmpObj = { "Choose A Time": null };

    while (open !== close) {
      let detailedTime = new Date(open).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      tmpObj = { ...tmpObj, [detailedTime]: open };
      open += INCREMENT_VALUE;
    }

    setTimeSlots(tmpObj);
  }, []);

  //----Event Handlers----//
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelection = (event) => {
    let op = event.target.getAttribute("data-key");
    setSelected(op);
    setFormValues({ ...formValues, service: op });
  };

  const handleTimeSelection = (event) => {
    const { name, value } = event.target;
    let milli = timeSlots[value];
    setFormValues({ ...formValues, [name]: milli });
    setFormTimeValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(
      "http://localhost:8080/booking/today",
      formValues
    );

    //Returns appointment card document
    console.log(res.data);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <header className="appointment-form-header">
        <h1>NEED A CUT TODAY?</h1>
        <h4>Book an appointment with us below!</h4>
      </header>
      <div className="input-wrapper">
        <div className="name-inputs">
          <FormInput
            name="firstName"
            type="text"
            value={formValues.firstName}
            label="First Name"
            handleChange={handleChange}
            inverted
            required
          />
          <FormInput
            name="lastName"
            type="text"
            value={formValues.lastName}
            label="Last Name"
            handleChange={handleChange}
            inverted
            required
          />
        </div>
        <FormInput
          name="email"
          type="email"
          value={formValues.email}
          label="Email Address"
          handleChange={handleChange}
          inverted
          required
        />
        <FormInput
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={formValues.phoneNumber}
          label="Phone Number"
          handleChange={handleChange}
          format="Format: 803-555-5555"
          inverted
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
            name="appointmentTime"
            values={Object.keys(timeSlots)}
            value={formTimeValue}
            handleChange={handleTimeSelection}
            required
          />
        </div>

        <ServicesMenuScroller
          name="service"
          handleSelection={handleSelection}
          selected={selected}
        />
      </div>

      <div className="btn-wrapper">
        <CustomButton title="Book Appointment" />
      </div>
    </form>
  );
};

export default AppointmentForm;
