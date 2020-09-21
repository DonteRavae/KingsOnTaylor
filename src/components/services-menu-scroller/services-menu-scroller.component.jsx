//React
import React, { useState } from "react";
//Components
import ServiceItem from "../service-item/service-item.component";
//Assets
import HighFade from "../../assets/high-fade-haircut.jpeg";
import TempFade from "../../assets/temple-fade-haircut.jpeg";
import EvenCut from "../../assets/even-haircut.jpeg";
import AfroTaper from "../../assets/afro-taper-haircut.jpeg";
//Styles
import "./services-menu-scroller.styles.scss";

const ServicesMenuScroller = () => {
  const [services, addServices] = useState([
    {
      style: "High Fade",
      image: HighFade,
    },
    {
      style: "Temple Fade",
      image: TempFade,
    },
    {
      style: "Even Cut",
      image: EvenCut,
    },
    {
      style: "Afro Taper",
      image: AfroTaper,
    },
  ]);

  return (
    <section className="services-menu-scroller">
      {services.map((service) => (
        <ServiceItem
          key={service.style}
          style={service.style}
          imgUrl={service.image}
        />
      ))}
    </section>
  );
};

export default ServicesMenuScroller;
