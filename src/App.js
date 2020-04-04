import React from 'react';
import HomeSection from './components/HomeSection/HomeSection'
import InfoScreen from './components/InfoScreen/InfoScreen'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/ContactUs/ContactUs'
import Team from './components/Team/Team'
import CopyRights from './components/CopyRights/CopyRights'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <InfoScreen/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <CopyRights />
    </div>
  );
}

export default App;
