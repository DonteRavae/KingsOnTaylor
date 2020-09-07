//React
import React from 'react';
//Components
import HeaderNav from './components/header-nav/header-nav.component';
import Landing from './components/landing/landing.component';
import SectionSeparator from './components/section-separator/section-separator.component';
//Styles
import './App.css';

const App = () => (
  <main className="App">
    <HeaderNav />
    <Landing />
    <SectionSeparator />
  </main>
);

export default App;