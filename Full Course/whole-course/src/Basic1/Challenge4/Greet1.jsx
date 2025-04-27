import React from 'react'

const Greet1 = () => {
    const greet='Hello';
    const date=new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date:{date.getDate()}</p>
    </div>
  )
}

export default Greet1
