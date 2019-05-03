import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand page-scroll" href="../index.html">{this.props.name}</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
