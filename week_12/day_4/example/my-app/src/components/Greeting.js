import React from 'react'
import { useDispatch, useSelector } from 'react-redux'; 

export default function Greeting() {
  const fakeData = useSelector((state) => state.fakeData);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Greeting</h1>
      {fakeData.map((data) => (<p>{data.username}</p>))}
      <button onClick={() => dispatch({ type: "INSERT_OBJECT" })}>Change User</button>
    </div>
  );
}
