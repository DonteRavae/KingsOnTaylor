//React
import React from "react";
//Styles
import "./form-input.styles.scss";

export const FormInput = ({ inverted, handleChange, label, ...otherProps }) => (
  <div className="form-input-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} ${
          inverted ? "inverted" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {otherProps.format ? (
      <span className={inverted ? "format-inverted" : "format"}>
        {otherProps.format}
      </span>
    ) : null}
  </div>
);

export const SelectFormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="form-input-group">
    <select
      onChange={handleChange}
      {...otherProps}
      className="select-form-options"
    >
      {otherProps.values.map((value) => (
        <option className="option" value={value} key={value}>
          {value[0].toUpperCase() + value.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default FormInput;
