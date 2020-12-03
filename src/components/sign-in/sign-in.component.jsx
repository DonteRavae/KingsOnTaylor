//React
import React from "react";
import { useState } from "react";
//Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
//Styles
import "./sign-in.styles.scss";

const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const { email, password } = formValues;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { email, password } = state;

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setState({email: '', password: ''});
    // } catch (error) {
    //   console.log(error);
    // }
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
          <CustomButton title="Sign in with Google" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
