import React, { Component } from 'react';

class Form extends Component {
  changeTerm = (value) => {
    this.setState({
      termLength: value
    })
  }

  calculateLoan = () => {
    let price = document.getElementById("price").value;
    let desposit = document.getElementById("deposit").value;
    let deliveryDate = document.getElementById("deliveryDate").value;
    let term = this.state.termLength;
    console.log(price);
    console.log(desposit);
    console.log(deliveryDate);
    console.log(term);
  }

  render() {
    return (
      <div className="form ch-bg--white ch-ba--1 ch-bc--grey-2 ch-pa--3 ch-rounded">
        <header className="form-header">
          <div className="ch-form__group">
            <label
              htmlFor="price"
              className="ch-form__control-label">
              Vehicle Price (£)
            </label>
            <input
              className="ch-form__control"
              type="number"
              id="price" />
          </div>
          <div className="ch-form__group">
            <label
              htmlFor="deposit"
              className="ch-form__control-label">
              Desposit amount (£)
            </label>
            <input
              className="ch-form__control"
              type="number"
              id="deposit" />
          </div>
          <div className="ch-form__group">
            <label
              htmlFor="deliveryDate"
              className="ch-form__control-label">
              Delivery date
            </label>
            <input
              className="ch-form__control"
              type="date"
              id="deliveryDate" />
          </div>
          <div className="ch-form__group">
            <h5 className="ch-mb--1">Finance term</h5>
            <input
              id="oneYear"
              type="radio"
              name="financeTerm"
              value={1}
              className="ch-reader ch-radio"
              onChange={() => this.changeTerm(1)} />
            <label
              htmlFor="oneYear"
              className="ch-radio__label ch-radio__label--compact">
              1 year
            </label>

            <input
              id="twoYears"
              type="radio"
              name="financeTerm"
              value={2}
              className="ch-reader ch-radio"
              onChange={() => this.changeTerm(2)} />
            <label
              htmlFor="twoYears"
              className="ch-ml--2 ch-radio__label ch-radio__label--compact">
              2 years
            </label>

            <input
              id="threeYears"
              type="radio"
              name="financeTerm"
              value={3}
              className="ch-reader ch-radio"
              onChange={() => this.changeTerm(3)} />
            <label
              htmlFor="threeYears"
              className="ch-ml--2 ch-radio__label ch-radio__label--compact">
              3 years
            </label>
          </div>
          <div className="ch-form__group">
            <button
              id="submit"
              className="ch-btn ch-btn--success"
              onClick={this.calculateLoan}>
              Calculate
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Form;
