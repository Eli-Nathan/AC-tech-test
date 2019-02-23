import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    // Initialise all states
    this.state = {
      vehiclePrice: null,
      deposit: null,
      date: null,
      formSubmitted: false,
      arrangementFee: 88,
      completionFee: 20,
      termLength: 1,
      depositError: false,
      data: []
    }
  }

  render() {
    return (
      <div className="sm:ch-col--10 sm:ch-col--offset-1 md:ch-col--8 md:ch-col--offset-2 lg:ch-col--6 lg:ch-col--offset-3">
        <div className="ch-bg--white ch-ba--1 ch-bc--grey-2 ch-pa--3 ch-rounded">
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
          <div className={`ch-form__group${this.props.depositError && " ch-form__group--error" }`}>
            <label
              htmlFor="deposit"
              className="ch-form__control-label">
              Desposit amount (£)
            </label>
            <span className="ch-form__control-validation">{`Deposit must be at least 15% of the vehicle price, i.e. £${(15 / 100 ) * this.props.price}`}</span>
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
          <div className="ch-form__group ch-display--inline-block ch-mr--2">
            <label
              htmlFor="arrangement"
              className="ch-form__control-label">
              Arrangement fee (£)
            </label>
            <input
              className="ch-form__control"
              type="number"
              id="arrangement"
              defaultValue={88} />
          </div>
          <div className="ch-form__group ch-display--inline-block">
            <label
              htmlFor="completion"
              className="ch-form__control-label">
              Completion fee (£)
            </label>
            <input
              className="ch-form__control"
              type="number"
              id="completion"
              defaultValue={20} />
          </div>

          <div className="ch-form__group">
            <h5 className="ch-mb--1">Finance term</h5>
            <input
              id="oneYear"
              type="radio"
              name="financeTerm"
              value={1}
              className="ch-reader ch-radio"
              onChange={() => this.props.switch(1)}
              defaultChecked />
            <label
              htmlFor="oneYear"
              className="ch-display--block sm:ch-display--inline ch-radio__label ch-mb--1 ch-radio__label--compact">
              1 year
            </label>

            <input
              id="twoYears"
              type="radio"
              name="financeTerm"
              value={2}
              className="ch-reader ch-radio"
              onChange={() => this.props.switch(2)} />
            <label
              htmlFor="twoYears"
              className="ch-display--block sm:ch-display--inline sm:ch-ml--2 ch-mb--1 ch-radio__label ch-radio__label--compact">
              2 years
            </label>

            <input
              id="threeYears"
              type="radio"
              name="financeTerm"
              value={3}
              className="ch-reader ch-radio"
              onChange={() => this.props.switch(3)} />
            <label
              htmlFor="threeYears"
              className="ch-display--block sm:ch-display--inline sm:ch-ml--2 ch-mb--1 ch-radio__label ch-radio__label--compact">
              3 years
            </label>
          </div>
          <div className="ch-form__group">
            <button
              id="submit"
              className="ch-btn ch-btn--success"
              onClick={this.props.submit}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
