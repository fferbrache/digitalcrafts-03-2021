import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User</h1>
      <p>{user}</p>
      <button onClick={()=>dispatch({type: "CHANGE_USER"})}>Change User</button>
    </div>
  )
}
