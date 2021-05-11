import React, { Component } from 'react'
import "../App.css"

 class ForeignEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fx1: "Lamborghini",
      fx2: "Porsche",
      fx3: "Ferrari",
      fx4: "Koenigsegg",
      fx5: "Bugatti",
    };
  }
  render() {
    const {fx1,fx2,fx3,fx4,fx5} = this.state;
    return (
      <div>
        <h3>Exotic Foreign Cars</h3>
        <ul>
          <li>{fx1}</li>
          <li>{fx2}</li>
          <li>{fx3}</li>
          <li>{fx4}</li>
          <li>{fx5}</li>
        </ul>
      </div>
    )
  }
}

export default ForeignEx;