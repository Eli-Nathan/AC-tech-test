import React, { Component } from 'react'

class Radio extends Component {

  render() {
    return (
      <>
        <input
          id={this.props.id}
          type="radio"
          name={this.props.name}
          value={this.props.value}
          className="ch-reader ch-radio"
          onChange={this.props.action}
          defaultChecked={this.props.defaultRadio} />
        <label
          htmlFor={this.props.id}
          className="ch-display--block sm:ch-display--inline ch-radio__label ch-mb--1 ch-radio__label--compact ch-mr--2">
          {this.props.label}
        </label>
      </>
    )
  }
}

export default Radio
