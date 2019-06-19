import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { fetch } from '../utils/httpGet.js';
import { shouldShowPrerenderedPage } from '../utils/preRender.js';
import Home from '../pages/Home.js';
import Results from '../pages/Results.js';
import { Route, HashRouter } from 'react-router-dom';

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
    // Check for Googlebot
    if (shouldShowPrerenderedPage(window.location.href)) {
      fetch('http://localhost:3000/' + window.location.href)
      .then((result) => {
        console.log(result);
        return result;
      });
    }

    return (
      <Provider store={store}>
        <HashRouter>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/results" component={Results}/>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
