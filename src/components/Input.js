import React, { Component } from 'react'

class Input extends Component {
/* Check validation errors and add classes based on their truthiness */
  render() {
    return (
      <div className={
        `ch-form__group
        ${this.props.isInvalid &&
          " ch-form__group--error"
        }
        ${this.props.smallInput &&
          " ch-display--inline-block ch-mr--2" }`}>
        <label
          htmlFor={this.props.id}
          className="ch-form__control-label">
          {this.props.label}
        </label>
        { /* Check validation errors and add <span> based on their truthiness */ }
        {this.props.isInvalid &&
          <span className="ch-form__control-validation">{this.props.validationMessage}</span>
        }
        <input
          className="ch-form__control"
          type={this.props.type}
          id={this.props.id}
          defaultValue={this.props.value} />
      </div>
    )
  }
}

export default Input
