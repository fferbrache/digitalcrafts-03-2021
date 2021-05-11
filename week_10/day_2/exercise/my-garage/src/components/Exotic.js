import React, { Component } from 'react'
import AmericanEx from "./AmericanEx"
import ForeignEx from "./ForeignEx"

class Exotic extends Component {
  render() {
    return (
      <div>
        <AmericanEx />
        <ForeignEx />
      </div>
    )
  }
}

export default Exotic;