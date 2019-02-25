import React, { Component } from 'react'
import Input from './Input'
import Radio from './Radio'

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
      isInvalid: false,
      data: []
    }
  }

  render() {
    return (
      <div className="sm:ch-col--10 sm:ch-col--offset-1 md:ch-col--8 md:ch-col--offset-2 lg:ch-col--6 lg:ch-col--offset-3">
        <div className="ch-bg--white ch-ba--1 ch-bc--grey-2 ch-pa--3 ch-rounded">
        { /* Input elements */ }
          <Input
            type="number"
            id="price"
            label="Vehicle price (£)" />
          <Input
            type="number"
            id="deposit"
            label="Desposit amount (£)"
            isInvalid={this.props.isInvalid}
            validationMessage={`Deposit must be at least 15% of the vehicle price, i.e. £${(15 / 100 ) * this.props.price}`} />
          <Input
            type="date"
            id="deliveryDate"
            label="Delivery date" />
          <Input
            type="number"
            id="arrangement"
            label="Arrangement fee (£)"
            value={88}
            smallInput={true} />
          <Input
            type="number"
            id="completion"
            label="Completion fee (£)"
            value={20}
            smallInput={true} />
          <div className="ch-form__group">
            <h5 className="ch-mb--1">Finance term</h5>
            { /* Radio elements */ }
          <Radio
            id="oneYear"
            value={1}
            action={() => this.props.switchRadio(1)}
            defaultRadio={true}
            name="financeTerm"
            label="1 year" />
          <Radio
            id="twoYears"
            value={2}
            action={() => this.props.switchRadio(2)}
            name="financeTerm"
            label="2 years" />
          <Radio
            id="threeYears"
            value={3}
            action={() => this.props.switchRadio(3)}
            name="financeTerm"
            label="3 years" />
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
