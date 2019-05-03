import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import WelcomeText from './WelcomeText.js';
import ResponseText from './ResponseText.js';
import EnterSSML from './EnterSSML.js';
import FixedSSML from './FixedSSML.js';
import Button from './Button.js';
import Platform from './Platform.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: '', fixed: '', ssml: '', platform: 'all', audiocheck: false}
  }

  onUpdateSSML(ssml) {
    this.setState({ssml: ssml})
  }

  onUpdateData(data) {
    this.setState({error: data[0], fixed: data[1]})
  }

  onUpdatePlatform(data) {
    this.setState({platform: data[0], audiocheck: data[1]})
  }

  render() {
    return (
      <div id="contact" className="text-center">
        <div className="container">
          <Header name='Garrett Vargas'/>
          <WelcomeText />
          <Platform initPlatform={this.state.platform} initAudio={this.state.audiocheck} onUpdate={this.onUpdatePlatform.bind(this)} />
          <ResponseText error={this.state.error}/>
          <div className="ssmlColumn">
            <EnterSSML ssml={this.state.ssml} onUpdate={this.onUpdateSSML.bind(this)} />
            <FixedSSML ssml={this.state.fixed} />
          </div>
          <Button data={this.state.data} ssml={this.state.ssml} platform={this.state.platform} audiocheck={this.state.audiocheck} onUpdate={this.onUpdateData.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;