import React, { Component } from 'react';
import { connect } from 'react-redux';
const qs = require('query-string');
const apiServer = process.env.SSMLAPI || 'http://localhost:3000';
import { fetch } from '../utils/httpGet.js';

class Button extends React.Component {
  onClick() {
    let url = apiServer + '/ssml?' + qs.stringify({
      platform: this.props.platform,
      validateAudioFiles: this.props.audiocheck,
      ssml: this.props.ssml,
    });

    return fetch(url)
    .then((text) => {
      // Success message
      const result = JSON.parse(text);
      let errorText;
      const errors = result.errors;

      if (!errors) {
        errorText = "The SSML entered is good!";
      } else {
        errorText = "";
        errors.forEach((error) => {
          if (error.type == "tag") {
            if (!error.attribute && !error.value) {
              errorText += "Tag <b>" + error.tag + "</b> is an invalid tag";
            } else {
              errorText += ("Tag <b>" + error.tag + "</b> has an error");
              if (error.attribute) {
                errorText += " with attribute <b>" + error.attribute + "</b>";
              }
              if (error.value) {
                errorText += " with value <b>" + error.value + "</b>";
              }
            }
          } else if (error.type == 'audio') {
            errorText += "<b>" + error.detail + "</b> with <b>audio</b> file " + error.value;
          } else {
            errorText += error.type;
          }
          errorText += ".  ";
        });
      }

      const fixedSSML = (result.fixedSSML) ? result.fixedSSML : errorText;
      this.props.dispatch({type: 'EXECUTE', error: errorText, fixed: fixedSSML});
    })
  }

  render() {
    return (
    <div>
      <button onClick={this.onClick.bind(this)} type="submit" className="btn btn-custom btn-lg">
        Check SSML
      </button>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ssml: state.ssml,
    error: state.error,
    fixed: state.fixed,
    platform: state.platform,
    audiocheck: state.audiocheck,
  };
}

export default connect(mapStateToProps)(Button);