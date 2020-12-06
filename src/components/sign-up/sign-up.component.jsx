//React
import React from "react";
import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
//Async and Utilities
import axios from "axios";
import bcrypt from "bcryptjs";
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

const createLoginWithEmailAndPassword = async (email, password) => {
  //Hash password before checking
  const hash = await bcrypt.hash(password, 12);
  try {
    let { data } = await axios.post("http://localhost:8080/loginProfileCheck", {
      email,
      hash,
    });

    if (!data) {
      alert("Email Address already exists!");
    }
    //If user doesn't exist in database return login profile. Data will return false if user exists.
    return data;
  } catch (error) {
    console.log(error);
  }
  //Check if user exists in database with unique email address.
};

const createUserProfile = async (loginId, additionalInfo) => {
  if (loginId === undefined) return;

  try {
    let user = await axios.post("http://localhost:8080/clientRegistration", {
      loginId,
      ...additionalInfo,
    });

    if (user.data) {
      return user.data;
    }
  } catch (error) {
    console.log(error);
  }
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
      const loginProfile = await createLoginWithEmailAndPassword(
        email,
        password
      );

      if (loginProfile === undefined) {
        return;
      }

      const client = await createUserProfile(loginProfile, {
        firstName,
        lastName,
        phoneNumber,
      });
      setUserProfile(client);
      setFormValues(INITIAL_FORM_VALUES);
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
