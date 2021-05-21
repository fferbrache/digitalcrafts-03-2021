import React, { useState } from 'react';
import Counter from './Counter'

export default function Greeter () {
  // we are setting the initial state here
  const [greet, setGreet] = useState("Frankie")

  const handleChange = (event) => {
    setGreet(event.target.value);

    // Class Based we do this for onChange
    // this.setState({
    //   greet: e.target.value
    // })
  }
  console.log(greet)

    return (
      <div>
        <h1>Welcome, {greet}</h1>
        <input type="text" onChange={handleChange} />
        <Counter greet={greet} />
      </div>
    )
  }
