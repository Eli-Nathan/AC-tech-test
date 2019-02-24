import React, { Component } from 'react'

class Radio extends Component {

  render() {
    return (
      <>
        <input
          className="ch-reader ch-radio"
          type="radio"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.action}
          defaultChecked={this.props.defaultRadio} />
        <label
          className="ch-display--block sm:ch-display--inline ch-radio__label ch-mb--1 ch-radio__label--compact ch-mr--2"
          htmlFor={this.props.id}>
          {this.props.label}
        </label>
      </>
    )
  }
}

export default Radio
