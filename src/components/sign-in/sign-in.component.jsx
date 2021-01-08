//React
import React, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
//Async and Utilities
import axios from "axios";
//Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
//Styles
import "./sign-in.styles.scss";
import { useEffect } from "react";

//Constants
const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
};

const signInWithEmailAndPassword = async (email, password) => {
  const { success, user, message } = await axios
    .post("http://localhost:8080/user/login", {
      email,
      password,
    })
    .then((response) => response.data);

  if (success) {
    console.log(message);
    return user;
  } else {
    console.log(message);
  }
};

const SignIn = () => {
  //----State----//
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [userProfile, setUserProfile] = useState(null);
  const { email, password } = formValues;

  //----Selectors and Dispatch----//
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(setCurrentUser(userProfile));
    }
    return () => (mounted = false);
  }, [dispatch, userProfile]);

  //----Event Handlers----//
  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUserProfile(await signInWithEmailAndPassword(email, password));
      setFormValues(INITIAL_FORM_VALUES);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton title="Sign In" />
          {/* <CustomButton title="Sign in with Google" /> */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
