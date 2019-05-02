const ssmlCheck = require('ssml-check');
import React, { Component } from 'react';

class Button extends React.Component {
  onClick() {
    const options = {
      platform: this.props.platform,
      validateAudioFiles: this.props.audiocheck,
    };

    ssmlCheck.verifyAndFix(this.props.ssml, options)
    .then((result) => {
      // Success message
      var errorText;
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
      this.props.onUpdate([errorText, fixedSSML])
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

export default Button;