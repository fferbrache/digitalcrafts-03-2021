import './App.css';
import React, { Component } from 'react'

class App extends Component {
  
  // Old way, create the constructor, pass
  // it props as an argument
  // invoke super inside of the constructor, pass it props as an argument
  // define this.state={}
  constructor(props) {
    super(props);
    // state management
    
    // the process of components passing data to each other
    // is called props
    
    // the process of a component managing its own data
    // and preserving it in a holding space, temporarily
    // this is called state management
    // initializing state
    // change in state causes entire app to "re-render" --> Common React Interview Question
    // other cause of "re-render" is mounting/un-mounting of a component on the DOM
    // React has a built in method to manipulate a state, "setState"
    this.state = { 
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: true,
    };
    // this.setState
    // this is the built in function to manipulate any state variable
    // you will only use this.setState to change state.
  }

  render() {
    // De-structuring counter
    const { counter, title, itIsRainingInHouston } = this.state;
    return (
      <>
        <h1>State Management</h1>
        <p>{ title }</p>
        <p>Is it raining in Houston? { itIsRainingInHouston ? (
          <div>
            <p>Rain, Rain, Rain, Rain, Rain</p>
          </div>
        ) : (
          <div>
            <p>Nope, no rain here.</p>
          </div>
        )}
        </p>
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        <p>Counter { counter }</p>
        <button onClick={(e)=>console.log(e)}>Add</button>
        <button>Subtract</button>
      </>
    );
  }
}

export default App;