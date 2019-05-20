import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResponseText extends React.Component {
  render() {
    return (
      <div className="alert alert-success">
        <div id="ssmlResult" dangerouslySetInnerHTML={{ __html: this.props.error }}>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

export default connect(mapStateToProps)(ResponseText);
