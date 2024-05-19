import { useParams } from 'react-router-dom';
import React from 'react'

 function User() { 
  const params = useParams();
  const {name}= params;
  console.warn(name)

  return (
    <div>
      <h1>This is {name} Page </h1>
    </div>
  )
}
export default User;
