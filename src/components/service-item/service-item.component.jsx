//React
import React from "react";
//Styles
import "./service-item.styles.scss";

const ServiceItem = ({
  style,
  imgUrl,
  handleSelection,
  selectedOption,
  name,
  value,
}) => {
  const bkg = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article className={` ${selectedOption ? "selected" : ""} service-item`}>
      <div className="service-name">{style}</div>
      <div className="service-img" style={bkg} />
      <div className="select">
        <label htmlFor="service">Select</label>
      </div>
      <input
        type="radio"
        name={name}
        id="service"
        onClick={handleSelection}
        data-key={style}
        value={style}
      />
    </article>
  );
};

export default ServiceItem;
