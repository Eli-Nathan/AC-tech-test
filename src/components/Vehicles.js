import React, { Component } from 'react'

class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.renderVehicles = this.renderVehicles.bind(this)
  }

  renderVehicles = () => {
    let vehicles = "Sorry, no vehicles found"
    let data = this.props.data.filter(d => d.salesInfo.pricing.monthlyPayment <= this.props.monthlyMax)
    if(data.length === 0) {
      return vehicles
    }

    if(data.length > 6) {
      data.length = 6
    }
    return data.map(vehicle => (
      <div className="sm:ch-col--6 md:ch-col--4 ch-mb--2 vehicleCard" key={vehicle.stockReference}>
        <div className="ch-bg--white ch-ba--1 ch-bc--grey-2 ch-rounded">
          <a href={vehicle.url} className="ch-color--ac-black ch-text-decoration--none">
            <div>
              <img
                src={vehicle.photos.length === 0 ? "https://www.arnoldclark.com/assets/application/no-images-vehicle-8c4df08470af32dee8f1a3ea091e72cbf2bac4225054b1844de0880d1bf766ae.svg" : vehicle.photos[0]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="ch-img-responsive "/>
            </div>
            <div className="ch-pa--2">
              <h4>{vehicle.title.name}</h4>
              <h5 className="ch-color--grey-5">{vehicle.title.variant}</h5>
            </div>
          </a>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <div className="sm:ch-col--12">
          <h3 className="ch-mt--4">Recommended vehicles</h3>
        </div>
        {this.renderVehicles()}
      </div>
    )
  }
}

export default Vehicles
