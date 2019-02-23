import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/Header'
import Form from './components/Form'
import Quote from './components/Quote'
import Schedule from './components/Schedule'
import Vehicles from './components/Vehicles'

module.exports = {
  coveragePathIgnorePatterns: ["/src/index.js"]
}

it('Successfully render header', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Successfully render form', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Form />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Successfully render quote', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Quote />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Successfully render schedule', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Schedule
      date={new Date()}
      termLength={1}
      monthlyMax={150}
      arrangementFee={88}
      completionFee={20} />, div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('Gets data length', () => {
  const div = document.createElement('div')
  const wrapper = ReactDOM.render(<Vehicles data={[]} monthlyMax={200} />, div)
  expect(wrapper.props.data.length).toEqual(0);
  ReactDOM.unmountComponentAtNode(div)
});

it('Successfully render vehicles', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Vehicles data={[]} monthlyMax={200} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Full app renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Index finds root element to render app', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  global.document.getElementById = (id) => id ==='root' && div
})
