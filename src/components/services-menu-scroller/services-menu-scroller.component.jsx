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
  const [services, toggleSelectedServices] = useState({
    "High Fade": {
      image: HighFade,
      selected: false
    },
    "Temple Fade": {
      image: TempFade,
      selected: false
    },
    "Even Cut": {
      image: EvenCut,
      selected: false
    },
    "Afro Taper": {
      image: AfroTaper,
      selected: false
    }
  });

  const handleSelection = event => {
    event.preventDefault();
    let selected = event.target.getAttribute('data-key');

  }

  return (
    <section className="services-menu-scroller">
      {Object.entries(services).map(([key, service]) => (
        <ServiceItem
          key={key}
          style={key}
          imgUrl={service.image}
          handleSelection={handleSelection}
          selected={service.selected}
        />
      ))}
    </section>
  );
};

export default ServicesMenuScroller;
