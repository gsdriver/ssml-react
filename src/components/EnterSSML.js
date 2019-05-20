import React, { Component } from 'react';
import { connect } from 'react-redux';

class EnterSSML extends React.Component {
  handleChange() {
    this.props.dispatch({type: 'UPDATESSML', ssml: this.refs.ssml.value});
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

function mapStateToProps(state) {
  return {
    ssml: state.ssml,
  };
}

export default connect(mapStateToProps)(EnterSSML);
