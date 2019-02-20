import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <header className="form-header">
          <div className="ch-form__group">
            <label
              htmlFor="price"
              className="ch-form__control-label"
            >
              Vehicle Price (£)
            </label>
            <input
              className="ch-form__control"
              type="number"
              id="price"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Form;
