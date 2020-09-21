//React
import React from "react";
//Styles
import "./service-item.styles.scss";

const ServiceItem = ({ style, imgUrl }) => {
  const bkg = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <article className="service-item">
      <div className="service-name">{style}</div>
      <div className="service-img" style={bkg} />
      <button className="select-btn">Select</button>
    </article>
  );
};

export default ServiceItem;
