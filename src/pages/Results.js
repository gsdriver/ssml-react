import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';
import Header from '../components/Header.js';
import WelcomeText from '../components/WelcomeText.js';
import ResponseText from '../components/ResponseText.js';
import EnterSSML from '../components/EnterSSML.js';
import FixedSSML from '../components/FixedSSML.js';
import Button from '../components/Button.js';
import Platform from '../components/Platform.js';

class Home extends React.Component {
  render() {
    return (
      <div id="contact" className="text-center">
        <div className="container">
          <Header name='Garrett Vargas'/>
          <WelcomeText />
          <ResponseText />
          <div className="ssmlColumn">
            <FixedSSML />
          </div>
          <NavLink to="/">Enter another SSML string</NavLink>
        </div>
      </div>
    )
  }
}


export default Home;
