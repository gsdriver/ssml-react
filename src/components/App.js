import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import Header from './Header.js';
import WelcomeText from './WelcomeText.js';
import ResponseText from './ResponseText.js';
import EnterSSML from './EnterSSML.js';
import FixedSSML from './FixedSSML.js';
import Button from './Button.js';
import Platform from './Platform.js';

const initialState = {
  error: '',
  fixed: '',
  ssml: '',
  platform: 'all',
  audiocheck: false
};

function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'EXECUTE':
      newState.error = action.error;
      newState.fixed = action.fixed;
      break;
    case 'UPDATESSML':
      newState.ssml = action.ssml;
      break;
    case 'UPDATEPLATFORM':
      newState.platform = action.platform;
      break;
    case 'UPDATEAUDIO':
      newState.audiocheck = action.audiocheck;
    default:
      break;
  }

  return newState;
}

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="contact" className="text-center">
          <div className="container">
            <Header name='Garrett Vargas'/>
            <WelcomeText />
            <ResponseText />
            <Platform />
            <div className="ssmlColumn">
              <EnterSSML />
              <FixedSSML />
            </div>
            <Button />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
