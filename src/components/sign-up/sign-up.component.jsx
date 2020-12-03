//React
import React from "react";
import { useState } from "react";
//Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
//Styles
import "./sign-up.styles.scss";

const INITIAL_FORM_VALUES = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = formValues;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument(user, { displayName });
    //   setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   })
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
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
