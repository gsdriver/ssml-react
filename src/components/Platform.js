import React, { Component } from 'react';
import { connect } from 'react-redux';

class Platform extends React.Component {
  onChangeAmazon() {
    this.props.dispatch({type: 'UPDATEPLATFORM', platform: 'amazon'});
  }

  onChangeGoogle() {
    this.props.dispatch({type: 'UPDATEPLATFORM', platform: 'google'});
  }

  onChangeAll() {
    this.props.dispatch({type: 'UPDATEPLATFORM', platform: 'all'});
  }

  onChangeAudio() {
    const checked = !this.props.audiocheck;

    this.props.dispatch({type: 'UPDATEAUDIO', audiocheck: checked});
  }

  render() {
    return (
      <div className="platform-form">
        <div className="mx-auto">
          <input type="radio" name="platform" value="amazon" checked={this.props.platform === "amazon"} onChange={this.onChangeAmazon.bind(this)} /> Amazon Alexa
          <input type="radio" name="platform" value="google" checked={this.props.platform === "google"} onChange={this.onChangeGoogle.bind(this)} /> Google
          <input type="radio" name="platform" value="all" checked={this.props.platform === "all"} onChange={this.onChangeAll.bind(this)} /> Both
        </div>
        <p>
          <input type="checkbox" name="audiocheck" checked={this.props.audiocheck === true} onChange={this.onChangeAudio.bind(this)} />Validate audio file
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    platform: state.platform,
    audiocheck: state.audiocheck,
  };
}

export default connect(mapStateToProps)(Platform);
