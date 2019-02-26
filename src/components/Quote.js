import React, { Component } from 'react'

class Quote extends Component {

  render() {
    return (
      <div>
        <h3 className="ch-mt--4">Your quote</h3>
        <p>{`For your interest free loan, you will borrow £${this.props.price - this.props.deposit} over ${this.props.termLength} years. Your first payment will be due on the first Monday of the month following the delivery date. The first payment listed below is inclusive of an £${this.props.arrangementFee} arrangement fee and the final payment is inclusive of a £${this.props.completionFee}`} completion fee</p>
      </div>
    )
  }
}

export default Quote
