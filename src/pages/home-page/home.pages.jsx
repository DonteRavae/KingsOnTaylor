//React
import React from "react";
//Components
import Landing from "../../components/landing/landing.component";
// import SectionSeparator from "../../components/section-separator/section-separator.component";
import FamilyAtmosphere from "../../components/family-atmosphere/family-atmosphere.component";
import DetailAndPrecision from "../../components/detail-and-precision/detail-and-precision.component";
import MembersOverview from "../../components/members-overview/members-overview.component";
//Styles
import "./home.styles.scss";

const HomePage = () => {
  return (
    <main className="App">
      <Landing />
      {/* <SectionSeparator msg="Heavy Is The Head That Wears The Crown" /> */}
      <FamilyAtmosphere />
      <DetailAndPrecision />
      <MembersOverview />
    </main>
  );
};

export default HomePage;
