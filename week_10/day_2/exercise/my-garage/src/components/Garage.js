import React, { Component } from 'react'
import Muscle from "./Muscle"
import Exotic from "./Exotic"
import Motorcycle from "./Motorcycle"

class Garage extends Component {

  render() {
    return (
      <div>
        <h1>Muscle Cars</h1>
        <Muscle />
        <h1>Exotic Cars</h1>
        <Exotic />
        <h1>Motorcycles</h1>
        <Motorcycle />
      </div>
    );
  }
}

export default Garage;