import React, { Component } from 'react';

class FixedSSML extends React.Component {
  render() {
    return (
      <div>
        <p className="ssmlHeader">
          Corrected SSML
        </p>
        <textarea readOnly name="fixedssml" id="fixedssml" className="form-control" rows="6" value={this.props.ssml} />
      </div>
    )
  }
}

export default FixedSSML;
