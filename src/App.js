import React, { Component } from 'react';
import './App.css';
import './components/navbar/navbar.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

//import Projects from './components/projects'
class App extends Component {
  render() {
    return (
			<div>
        <Navbar></Navbar>
        <Home></Home>
        <br />
      </div>
    );
  }
}

export default App;