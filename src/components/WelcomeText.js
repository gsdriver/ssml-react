import React, { Component } from 'react';

class WelcomeText extends React.Component {
  render() {
    return (
      <div className="section-title text-center">
        <h2>SSML Check</h2>
        <hr />
        <p>Enter your SSML Text below and press Check SSML.</p>
        <p>This form uses the <a href="https://www.npmjs.com/package/ssml-check">ssml-check</a> NPM module to verify the SSML syntax.</p>
      </div>
    )
  }
}

export default WelcomeText;
