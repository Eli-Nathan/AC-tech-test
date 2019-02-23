import React, { Component } from 'react'
import Quote from './components/Quote';
import Vehicles from './components/Vehicles'
import Schedule from './components/Schedule'
import logo from './ac-logo.svg'
import './App.scss'

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
      depositError: false,
      data: []
    }
  }

  componentDidMount = () => {
    this.setState({
      termLength: 1
    })
    this.getData()
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
    if(deliveryDate === null) deliveryDate = new Date()
    if(deposit >= ((15 / 100 ) * price)) {
      this.setState({
        price: price,
        deposit: deposit,
        date: deliveryDate,
        depositError: false,
        arrangementFee: arrangement,
        completionFee: completion,
        formSubmitted: true,
        monthlyMax: parseInt((price - deposit) / (this.state.termLength*12))
      })
    }
    else {
      this.setState({
        price: price,
        date: new Date(),
        depositError: true
      })
    }
  }



  getData = () => {
    let _this = this
    // I'm well aware of the obvious security risk below but my CORS plugin has been playing up so I'm using cors.io for the purposes of this tech test
    fetch('https://cors.io/?https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&amp;min_price=100&amp;max_price=150&amp;sort_order=monthly_payment_up')
    .then(
      response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(
          data => {
            _this.setState({data: data.searchResults})
          }
        );
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });;
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
              <div className={`ch-form__group ${this.state.depositError && "ch-form__group--error" }`}>
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
                  onChange={() => this.changeTerm(1)}
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
                  onChange={() => this.changeTerm(2)} />
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
                  onChange={() => this.changeTerm(3)} />
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
                  onClick={this.calculateLoan}>
                  Calculate
                </button>
              </div>
            </header>
          </div>
        </div>
        {this.state.formSubmitted > 0 &&
          <div>
            <div className="sm:ch-col--10 sm:ch-col--offset-1 md:ch-col--8 md:ch-col--offset-2 lg:ch-col--6 lg:ch-col--offset-3">
              { /* Quote component */ }
              <Quote
                price={this.state.price}
                deposit={this.state.deposit}
                termLength={this.state.termLength}
                arrangementFee={this.state.arrangementFee}
                completionFee={this.state.completionFee} />

              { /* Schedule component */ }
              <Schedule
                termLength={this.state.termLength}
                monthlyMax={this.state.monthlyMax}
                arrangementFee={this.state.completionFee}
                completionFee={this.state.completionFee}
                date={this.state.date} />

            </div>

            { /* Vehicles component */ }
            <Vehicles
              data={this.state.data}
              monthlyMax={this.state.monthlyMax} />
          </div>
        }
      </div>
    );
  }
}

export default App;
