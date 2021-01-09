//React
import React from "react";
import { useSelector } from "react-redux";
import ClientPortal from "../../components/client-portal/client-portal.component";
//Components
// import ClientPortal from "../../components/client-portal/client-portal.component";
import SignInAndSignUp from "../../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
//Styles
import "./clientHub.styles.scss";

const ClientHubPage = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  console.log(currentUser);
  return (
    <main className="client-hub">
      {currentUser !== null ? (
        <ClientPortal currentUser={currentUser} />
      ) : (
        <SignInAndSignUp />
      )}
    </main>
  );
};

export default ClientHubPage;
