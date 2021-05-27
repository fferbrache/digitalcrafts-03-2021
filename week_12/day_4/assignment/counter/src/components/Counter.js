import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounterAdd, changeCounterSubtract } from '../actions/counterActions';

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={() => changeCounterAdd(dispatch)}>Add</button>
      <button onClick={() => changeCounterSubtract(dispatch)}>Subtract</button>
    </div>
  )
}
