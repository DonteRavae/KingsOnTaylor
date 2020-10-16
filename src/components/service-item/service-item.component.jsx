//React
import React from "react";
//Styles
import "./service-item.styles.scss";

const ServiceItem = ({ style, imgUrl, handleSelection, selectedOption }) => {


  const bkg = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };



  return (
    <article className={` ${selectedOption ? 'selected' : ''} service-item`} onClick={handleSelection} data-key={style}>
      <div className="service-name">{style}</div>
      <div className="service-img" style={bkg} />
      <div className="select">Select</div>
    </article>
  );
};

export default ServiceItem;
