//React
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
//Components
import HeaderNav from "./components/header-nav/header-nav.component";
import HomePage from "./pages/home-page/home.pages";
import ClientPortal from "./components/client-portal/client-portal.component.jsx";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
//Styles
import "./App.css";

const App = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  return (
    <Router>
      <main className="App">
        <div className="background-img" />
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/clientHub"
            render={() =>
              !currentUser ? (
                <SignInAndSignUp />
              ) : (
                <Redirect to={`/clientHub/${currentUser._id}`} />
              )
            }
          />
          <Route
            exact
            path={`/clientHub/${currentUser ? currentUser._id : ""}`}
            render={() => <ClientPortal currentUser={currentUser} />}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
