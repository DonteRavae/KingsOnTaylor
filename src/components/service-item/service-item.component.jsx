//React
import React, { useState } from "react";
//Styles
import "./service-item.styles.scss";

const ServiceItem = ({ style, imgUrl, handleSelection, selected }) => {


  const bkg = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };



  return (
    <article className={` ${selected ? 'selected' : ''} service-item`}>
      <div className="service-name">{style}</div>
      <div className="service-img" style={bkg} />
      <button className="select-btn" onClick={handleSelection} data-key={style}>Select</button>
    </article>
  );
};

export default ServiceItem;
