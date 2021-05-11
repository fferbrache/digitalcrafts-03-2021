import React, { Component } from 'react'
import AmericanMoto from "./AmericanMoto"
import ForeignMoto from "./ForeignMoto"

class Motorcycle extends Component {
  render() {
    return (
      <div>
        <AmericanMoto />
        <ForeignMoto />
      </div>
    )
  }
}

export default Motorcycle;