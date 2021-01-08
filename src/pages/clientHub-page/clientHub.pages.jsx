//React
import React from "react";
//Components
import SignInAndSignUp from "../../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
//Styles
import "./clientHub.styles.scss";

const ClientHubPage = () => {
  return (
    <main className="client-hub">
      <SignInAndSignUp />
    </main>
  );
};

export default ClientHubPage;
