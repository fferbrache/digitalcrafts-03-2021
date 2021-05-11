import React, { Component } from 'react'

 class AmericanMuscle extends Component {
   constructor(props) {
     super(props);

     this.state = {
       americanMuscle1: "Pontiac GTO Judge",
       americanMuscle2: "Ford Mustang Boss 429",
       americanMuscle3: "Dodge Charger Daytona",
       americanMuscle4: "Chevrolet Chevelle SS 454",
       americanMuscle5: "AMC AMX/3",
     }
   }
  render() {
    const {americanMuscle1, americanMuscle2, americanMuscle3, americanMuscle4, americanMuscle5} = this.state;
    return (
      <div>
        <h3>American Muscle Cars</h3>
        <ul>
          <li>{americanMuscle1}</li>
          <li>{americanMuscle2}</li>
          <li>{americanMuscle3}</li>
          <li>{americanMuscle4}</li>
          <li>{americanMuscle5}</li>
        </ul>
      </div>
    )
  }
}

export default AmericanMuscle;