import React, { Component } from 'react'
import "../App.css"

 class ForeignMoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fmoto1: "Ducati",
      fmoto2: "Honda",
      fmoto3: "Yamaha",
      fmoto4: "Kawasaki",
      fmoto5: "Suzuki",
     };
  }
  render() {
    const {fmoto1,fmoto2,fmoto3,fmoto4,fmoto5} = this.state
    return (
      <div>
        <h3>Foreign Motorcycles</h3>
        <ul>
          <li>{fmoto1}</li>
          <li>{fmoto2}</li>
          <li>{fmoto3}</li>
          <li>{fmoto4}</li>
          <li>{fmoto5}</li>
        </ul>
      </div>
    )
  }
}

export default ForeignMoto;