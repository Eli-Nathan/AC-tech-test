import React, { Component } from 'react';
import moment from 'moment'

class Schedule extends Component {
  getMondays = (date, nextMonday) => {
    let allPaymentDates = []
    let eachDate
    let monthsToPay = this.props.termLength*12
    for(let i = 0; i < monthsToPay; i++) {
      eachDate = new Date(date.getFullYear(), (date.getMonth() + (i + 1)))
      eachDate = new Date(eachDate.setDate(eachDate.getDate() + (nextMonday+(7 - eachDate.getDay())) % 7))
      allPaymentDates.push(
        {
          key: i+1,
          date: eachDate,
          payment: this.props.monthlyMax
        }
      )
    }
    // Add 88 initial payment to first date
    allPaymentDates[0].payment = allPaymentDates[0].payment + this.props.arrangementFee;
    // Add 20 settlement payment to last date
    allPaymentDates[allPaymentDates.length -1].payment = allPaymentDates[allPaymentDates.length -1].payment + this.props.completionFee;
    return allPaymentDates
  }

  renderSchedule = () => {
    const allDates = this.getMondays(this.props.date, 1).map(payment => (
      <tr key={payment.key}>
        <td>{moment(payment.date).format("Do MMM YYYY")}</td>
        <td>£{payment.payment.toFixed(2)}</td>
      </tr>
    ))
    return allDates
  }

  render() {
    return (
      <div>
        <h3 className="ch-mt--4">Payment Schedule</h3>
        <table
          className="ch-table ch-table--bordered ch-table--hover ch-table--striped ch-mt--2"
          width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount payable</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSchedule()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
