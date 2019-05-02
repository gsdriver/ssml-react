import React, { Component } from 'react';

class EnterSSML extends React.Component {
  constructor(props) {
    super(props)
    this.state = {ssml: this.props.ssml}
  }

  handleChange() {
    this.props.onUpdate(this.refs.ssml.value)
  }

  render() {
    return (
      <div>
        <p className="ssmlHeader">Enter SSML</p>
        <textarea name="ssml" ref="ssml" onChange={this.handleChange.bind(this)} id="ssml" placeholder="<speak> Enter your SSML here </speak>" className="form-control" rows="6" required></textarea>
      </div>
    )
  }
}

export default EnterSSML;
