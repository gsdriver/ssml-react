import React, { Component } from 'react';

class Platform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {platform: this.props.initPlatform, audiocheck: this.props.initAudio}
  }

  onChangeAmazon() {
    this.setState({platform: 'amazon'})
    this.props.onUpdate(['amazon', this.state.audiocheck])
  }

  onChangeGoogle() {
    this.setState({platform: 'google'})
    this.props.onUpdate(['google', this.state.audiocheck])
  }

  onChangeAll() {
    this.setState({platform: 'all'})
    this.props.onUpdate(['all', this.state.audiocheck])
  }

  onChangeAudio() {
    const checked = !this.state.audiocheck;

    this.setState({audiocheck: checked})
    console.log(checked)
    this.props.onUpdate([this.state.platform, checked])
  }

  render() {
    return (
      <div>
        <div className="mx-auto">
          <input type="radio" name="platform" value="amazon" checked={this.state.platform === "amazon"} onChange={this.onChangeAmazon.bind(this)} /> Amazon Alexa
          <input type="radio" name="platform" value="google" checked={this.state.platform === "google"} onChange={this.onChangeGoogle.bind(this)} /> Google
          <input type="radio" name="platform" value="all" checked={this.state.platform === "all"} onChange={this.onChangeAll.bind(this)} /> Both
        </div>
        <p>
          <input type="checkbox" name="audiocheck" checked={this.state.audiocheck === true} onChange={this.onChangeAudio.bind(this)} />Validate audio file
        </p>
      </div>
    )
  }
}

export default Platform;
