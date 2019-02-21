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
      arrangementFee: 88,
      completionFee: 20,
      termLength: null,
      depositError: "ch-form__group"
    }
  }

  changeTerm = (value) => {
    this.setState({
      termLength: value
    }, () => this.state.formSubmitted ? this.calculateLoan() : "")
  }

  calculateLoan = () => {
    let price = document.getElementById("price").value;
    let deposit = document.getElementById("deposit").value;
    let deliveryDate = document.getElementById("deliveryDate").valueAsDate
    let arrangement = parseInt(document.getElementById("arrangement").value)
    let completion = parseInt(document.getElementById("completion").value)
    deliveryDate == undefined ? deliveryDate = new Date() : deliveryDate = deliveryDate
    if(deposit >= ((15 / 100 ) * price)) {
      this.setState({
        price: price,
        deposit: deposit,
        date: deliveryDate,
        depositError: "ch-form__group",
        arrangementFee: arrangement,
        completionFee: completion,
        formSubmitted: true
      }, () => console.log(this.state.arrangementFee))
    }
    else {
      this.setState({
        price: price,
        date: new Date(),
        depositError: "ch-form__group ch-form__group--error"
      })
    }
  }

  getMondays = (date, nextMonday) => {
    let allPaymentDates = []
    let eachDate
    let monthsToPay = this.state.termLength*12;
    let deliveryDate = new Date(date)
    // Get current month and add 1
    let firstPaymentDate = new Date(date.getFullYear(), date.getMonth() + 1)
    firstPaymentDate = firstPaymentDate.setDate(firstPaymentDate.getDate() + (nextMonday+(7 - firstPaymentDate.getDay())) % 7)
    for(let i = 0; i < monthsToPay; i++) {
      eachDate = new Date(date.getFullYear(), date.getMonth() + (1 * (i+1)))
      eachDate = new Date(eachDate.setDate(eachDate.getDate() + (nextMonday+(7 - eachDate.getDay())) % 7))
      allPaymentDates.push(
        {
          date: eachDate,
          payment: (this.state.price - this.state.deposit) / monthsToPay
        }
      )
    }
    // Add 88 initial payment to first date
    allPaymentDates[0].payment = allPaymentDates[0].payment + this.state.arrangementFee;
    // Add 20 settlement payment to last date
    allPaymentDates[allPaymentDates.length -1].payment = allPaymentDates[allPaymentDates.length -1].payment + this.state.completionFee;
    return allPaymentDates
  }

  renderSchedule = () => {
    const allDates = this.getMondays(this.state.date, 1).map(payment => (
      <div key={payment.date+Math.random().toString()}>
        <h3>{payment.date.toString()}</h3>
        <h3>{payment.payment.toString()}</h3>
      </div>
    ))
    return allDates
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
              <span className="ch-form__control-validation">{`Deposit must be at least 15% of the vehicle price, i.e. £${(15 / 100 ) * this.state.price}`}</span>
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
