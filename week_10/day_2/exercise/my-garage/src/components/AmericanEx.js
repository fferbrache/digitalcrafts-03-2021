import React, { Component } from 'react'
import "../App.css"

 class AmericanEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amex1: "Chevrolet Camaro ZL1",
      amex2: "Chevrolet Corvette Z06",
      amex3: "Dodge Viper ACR",
      amex4: "Dodge Challenger SRT Hellcat",
      amex5: "Ford Shelby GT350",
    };
  }
  render() {
    const {amex1,amex2,amex3,amex4,amex5} = this.state;
    return (
      <div>
        <h3>Exotic American Cars</h3>
        <ul>
          <li>{amex1}</li>
          <li>{amex2}</li>
          <li>{amex3}</li>
          <li>{amex4}</li>
          <li>{amex5}</li>
        </ul>
      </div>
    )
  }
}

export default AmericanEx;