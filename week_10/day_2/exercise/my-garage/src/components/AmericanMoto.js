import React, { Component } from 'react'
import "../App.css"

 class AmericanMoto extends Component {
   constructor(props) {
     super(props);
     this.state = {
       amoto1: "Harley-Davidson",
       amoto2: "Indian",
       amoto3: "Big Bear",
       amoto4: "Boss Hoss",
       amoto5: "Ridley",
      };
   }
  render() {
    const {amoto1,amoto2,amoto3,amoto4,amoto5} = this.state
    return (
      <div>
        <h3>American Motorcycles</h3>
        <ul>
          <li>{amoto1}</li>
          <li>{amoto2}</li>
          <li>{amoto3}</li>
          <li>{amoto4}</li>
          <li>{amoto5}</li>
        </ul>
      </div>
    )
  }
}

export default AmericanMoto;