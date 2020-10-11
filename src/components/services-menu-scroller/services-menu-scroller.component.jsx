//React
import React from "react";
//Components
import ServiceItem from "../service-item/service-item.component";
//Assets
import HighFade from "../../assets/high-fade-haircut.jpeg";
import TempFade from "../../assets/temple-fade-haircut.jpeg";
import EvenCut from "../../assets/even-haircut.jpeg";
import AfroTaper from "../../assets/afro-taper-haircut.jpeg";
//Styles
import "./services-menu-scroller.styles.scss";

const ServicesMenuScroller = ({handleSelection, selected}) => {
  //Static services for now but in future populate with universal services (services each barber supplies)
  const services = [
    {
      type: "High Fade",
      image: HighFade,
    },
    {
      type: "Temple Fade",
      image: TempFade,
    },
    {
      type: "Even Cut",
      image: EvenCut,
    },
    {
      type: "Afro Taper",
      image: AfroTaper,
    }
  ];

  return (
    <section className="services-menu-scroller"> 
      {services.map(service => (
        <ServiceItem
          key={service.type}
          style={service.type}
          imgUrl={service.image}
          handleSelection={handleSelection}
          selectedOption={selected === service.type ? true : false}
        />
      ))}
    </section>
  );
};

export default ServicesMenuScroller;
