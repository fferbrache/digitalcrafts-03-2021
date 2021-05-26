import React from 'react';
import { useSelector, useDispatch } from "react-redux";

export default function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{userName}</p>
      <p>{counter}</p>
      <button onClick={()=>dispatch({type: "ADD"})}>Add</button>
      <button onClick={()=>dispatch({type: "SUBTRACT"})}>Subtract</button>
    </div>
  )
}
