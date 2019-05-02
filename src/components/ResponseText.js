import React, { Component } from 'react';

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

export default ResponseText;
