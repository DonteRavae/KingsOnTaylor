//React
import React from 'react';
//Styles
import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="form-input-group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        ) : null}
        {otherProps.format ? (<span className="format">{otherProps.format}</span>) : null }
    </div>
);

export const SelectFormInput = ({label, ...otherProps}) => (
    <div className="form-input-group">
        <select {...otherProps} className="select-form-options">
            {otherProps.values.map(value => (
                <option className="option" value={value}>{value[0].toUpperCase() + value.slice(1)}</option>
            ))}
        </select>
    </div>
);

export default FormInput;
