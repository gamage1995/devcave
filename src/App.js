import React from 'react';
import HomeSection from './components/HomeSection/HomeSection'
import InfoScreen from './components/InfoScreen/InfoScreen'
import Services from './components/Services/Services'
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <InfoScreen/>
      <Services/>
    </div>
  );
}

export default App;
