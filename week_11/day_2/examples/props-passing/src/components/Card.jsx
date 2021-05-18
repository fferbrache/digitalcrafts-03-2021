import React, { Component } from 'react'

class Card extends Component {
  state = {
    flip: false
  }
  render() {
    // console.lof(this.props.pokemon)
    const {hp, id, name, sprites} = this.props.pokemon
    return (
      <div>
        <img src={this.state.flip ? sprites.back : sprites.front} alt="" />
        <h2>{name}</h2>
        <p>{hp}</p>
        <p>{id}</p>
        <button onClick={() => this.setState({flip: !this.state.flip})}>Flip</button>
      </div>
    );
  }
}

export default Card;
