//React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import HeaderNav from "./components/header-nav/header-nav.component";
import HomePage from "./pages/home-page/home.pages";
import BarbersPage from "./pages/barbers-page/barbers.pages";
import ClientHubPage from "./pages/clientHub-page/clientHub.pages";
//Styles
import "./App.css";

const App = () => (
  <Router>
    <main className="App">
      <HeaderNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/barbers">
          <BarbersPage />
        </Route>
        <Route path="/clientHub">
          <ClientHubPage />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
