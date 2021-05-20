import React, { Component } from 'react';

export default class ClassBased extends Component {
  state = {
    loadingMessage: "loading",
  };
  render() {
    return (
      <div>
        <h1>Class Based Component</h1>
        {this.state.loadingMessage}
        <button onClick={() => this.setState({ loadingMessage: "finished"})}>Finished Loading</button>
      </div>
    )
  }
}
