//React
import React from "react";
//Styles
import "./section-separator.styles.scss";

const SectionSeparator = ({ msg }) => (
  <div className="section-separator">
    <h1>{msg}</h1>
  </div>
);

export default SectionSeparator;
