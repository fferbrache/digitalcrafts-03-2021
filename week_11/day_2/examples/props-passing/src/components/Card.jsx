import React, { Component } from 'react'

class Card extends Component {
  render() {
    console.log(this.props.pokemon)
    return (
      <div>
        <h1>Card</h1>
      </div>
    );
  }
}

export default Card;
