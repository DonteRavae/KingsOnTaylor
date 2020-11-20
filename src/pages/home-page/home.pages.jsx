//React
import React from "react";
//Pages
// import BarbersPage from "../barbers-page/barbers.pages";
//Components
import HeaderNav from "../../components/header-nav/header-nav.component";
import Landing from "../../components/landing/landing.component";
import SectionSeparator from "../../components/section-separator/section-separator.component";
// import BarbersOverview from "../../components/barbers-overview/barbers-overview.component";
//Styles
import "./home.styles.scss";

const HomePage = () => {
  return (
    <main className="App">
      <HeaderNav />
      <Landing />
      <SectionSeparator msg="Heavy Is The Head That Wears The Crown" />
      {/* <BarbersOverview /> */}
      <SectionSeparator msg="Style Section Separator.... Quote TBD" />
      <SectionSeparator msg="Precision Section Separator.... Quote TBD" />
    </main>
  );
};

export default HomePage;
