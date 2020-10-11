//React
import React from 'react';
//Styles
import './custom-button.styles.scss';

const CustomButton = ({ title, handleSubmit }) => (
    <button className="custom-button" onClick={handleSubmit}>{title}</button>
);

export default CustomButton;