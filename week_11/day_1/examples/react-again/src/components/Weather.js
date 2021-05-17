import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
    greeting: "",
    listOfPokemonCards: [],
    mapPoints: {},
    count: 0,
  };
  
  }
  render() {
    console.log(this)
    return (
      <div style={{
        marginRight: "20px",
        marginLeft: "20px",
        backgroundColor: "green",
        height: "300px",
        width: "50%"
      }}>
        <h1>Weather.js</h1>
        <div>{this.props.sun}</div>
        <div>{this.props.rain}</div>
        <div>{this.props.car}</div>
        <button onClick={() => this.props.setSpeeding(!this.props.speeding)}>{this.props.speeding
        ? "Person is no longer speeding"
        : "Person is speeding"} </button>
    
        
      </div>
    );
  }
}

export default Weather;