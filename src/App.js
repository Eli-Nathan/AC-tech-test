import React, { Component } from 'react';
import moment from 'moment';
import logo from './ac-logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclePrice: null,
      deposit: null,
      date: null,
      formSubmitted: false,
      termLength: null,
      depositError: "ch-form__group"
    }
  }

  changeTerm = (value) => {
    this.setState({
      termLength: value
    })
  }

  calculateLoan = () => {
    let price = document.getElementById("price").value;
    let deposit = document.getElementById("deposit").value;
    let deliveryDate = document.getElementById("deliveryDate").valueAsDate
    if(deposit >= ((15 / 100 ) * price)) {
      this.setState({
        price: price,
        deposit: deposit,
        date: deliveryDate,
        depositError: "ch-form__group",
        formSubmitted: true
      })
    }
    else {
      this.setState({
        depositError: "ch-form__group ch-form__group--error"
      })
    }
  }

  getMondays = (date, nextMonday) => {
    let deliveryDate = new Date(date)
    // let endDate = new Date(date.setFullYear(date.getFullYear() + this.state.termLength))
    let allPaymentDates = []
    let eachDate
    deliveryDate = deliveryDate.setDate(deliveryDate.getDate() + (nextMonday+(7-deliveryDate.getDay())) % 7)
    // endDate = endDate.setDate(endDate.getDate() + (nextMonday+(7-endDate.getDay())) % 7)

    // endDate = moment(endDate).format("Do MMM YYYY")
    for(let i = 0; i < this.state.termLength*52; i++) {
      eachDate = new Date(deliveryDate)
      eachDate.setDate(eachDate.getDate() + (7 * i))
      allPaymentDates.push(
        {
          date: eachDate,
          payment: 50
        }
      )
    }
    console.log(allPaymentDates);
    return deliveryDate
  }

  renderSchedule = () => {
    let firstDate = new Date(this.getMondays(this.state.date, 1))
    return (
      <div>
        <h2>Payment Schedule</h2>
        <h3>{`First payment date is: ${firstDate}`}</h3>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header ch-text--center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="ch-mt--3">Interest free loan calculator</h1>
        </header>
        <div className="sm:ch-col--10 sm:ch-col--offset-1 md:ch-col--8 md:ch-col--offset-2 lg:ch-col--6 lg:ch-col--offset-3">
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
            <div className={this.state.depositError}>
              <label
                htmlFor="deposit"
                className="ch-form__control-label">
                Desposit amount (£)
              </label>
              <span className="ch-form__control-validation">Deposit must be at least 15% of the vehicle price</span>
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
          {this.state.formSubmitted ? this.renderSchedule() : ""}
        </div>
      </div>
    );
  }
}

export default App;
