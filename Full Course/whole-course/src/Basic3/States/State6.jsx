import React, { useState } from 'react'

const State6 = () => {
    const [randomNumber,setRandomNumber]=useState(()=>{
       return  Math.floor((Math.random)*100)
    })
    const generateNewNumber=()=>{
        const newNumber=Math.floor((Math.random)*100);
        setRandomNumber(newNumber);
    }
  return (
    <div>
      <h1>Random Number:{randomNumber}</h1>
      <button onClick={generateNewNumber}>Generate New Number</button>
    </div>
  )
}

export default State6
