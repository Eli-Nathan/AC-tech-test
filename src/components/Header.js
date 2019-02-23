import React, { Component } from 'react'
import logo from '../ac-logo.svg'

class Header extends Component {

  render() {
    return (
      <div className="ch-text--center">
        <img
          src={logo}
          alt="logo" />
        <h1 className="ch-mt--3">{this.props.heading}</h1>
      </div>
    )
  }
}

export default Header
