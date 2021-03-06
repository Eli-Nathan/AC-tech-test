import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Header from './components/Header'
import Form from './components/Form'
import Quote from './components/Quote'
import Schedule from './components/Schedule'
import Vehicles from './components/Vehicles'
import Input from './components/Input'
import Radio from './components/Radio'

configure({ adapter: new Adapter() });

/*
  Just some basic tests to see if components mount properly
  I don't have much experience with unit testing so these tests are very basic.
*/

describe('<App />', () => {
  it('Component renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Header />', () => {
  it('Successfully render header', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Form />', () => {
  it('Successfully render form', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('has correct amount of inputs', () => {
    const form = mount(<Form />);
    expect(form.find('input').length).toBe(8)
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Input />', () => {
  it('Successfully render input', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Input />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Radio />', () => {
  it('Successfully render Radio', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Radio />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Quote />', () => {
  it('Successfully render quote', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Quote />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Schedule />', () => {
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

  it('matches the snapshot', () => {
    const tree = renderer.create(<Schedule
      date={new Date()}
      termLength={1}
      monthlyMax={150}
      arrangementFee={88}
      completionFee={20} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Vehicles />', () => {
  it('Successfully render vehicles', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Vehicles data={[]} monthlyMax={200} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Vehicles data={[]} monthlyMax={200} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

it('Index finds root element to render app', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  global.document.getElementById = (id) => id ==='root' && div
})
