import React, { Component } from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  return {
    ssml: state.fixed,
  };
}

export default connect(mapStateToProps)(FixedSSML);
