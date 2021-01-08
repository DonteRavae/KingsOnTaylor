//React
import React from "react";
import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
//Async and Utilities
import axios from "axios";
//Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
//Styles
import "./sign-up.styles.scss";
import { setCurrentUser } from "../../redux/user/user.actions";
import { useEffect } from "react";

//Constants
const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  //----State----//
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [userProfile, setUserProfile] = useState(null);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  } = formValues;

  //----Selectors and Dispatch----//
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(setCurrentUser(userProfile));
    return () => (mounted = false);
  }, [userProfile, dispatch]);

  //--Event Handlers----//
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { success, user, message } = await axios
        .post("http://localhost:8080/user/register", formValues)
        .then((response) => response.data);
      if (success) {
        setUserProfile(user);
        setFormValues(INITIAL_FORM_VALUES);
        console.log(message);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          label="First Name"
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          label="Last Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phoneNumber}
          label="Phone Number"
          handleChange={handleChange}
          format="Format: 803-555-5555"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton title="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
