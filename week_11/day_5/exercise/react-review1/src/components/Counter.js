import React, { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(40)

  return (
    <div>
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <h3>{props.greet} needs {count} of Grandma's Cookies</h3>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}
