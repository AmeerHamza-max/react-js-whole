// With JSX you can write expressions inside curly braces.The expressions can be a react varaiable or properly.
// or any other valid javascript expression jsx will execute the expression and return the result.

import React from 'react'

const Expression = () => {
    const myName='Ameer Hamza'
    const multiply=(a,b)=>a*b;
    const specialClass='simple-class'
  return (
    <div>
      <p>2+2={2+2}</p>
      <h1>{myName}</h1>
      <p>My friend list :{['Hamza','Hamza','Ameer','Hamza']}</p>
      <p>2*10={multiply(2,10)}</p>
      <p className={specialClass}>This is special class</p>
    </div>
  )
}

export default Expression
