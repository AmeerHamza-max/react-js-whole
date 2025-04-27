import React, { useState } from 'react'
import '../Style.css'
const Counter = () => {
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    
  return (
    <div className='container'>
      <h1 className='number'>{count}</h1>
      <div className="btn-containers">
        <button className='increment' onClick={increment}>+</button>
        <button className='decrement' style={{margin:'10px'}} onClick={decrement}>-</button>
      </div>

    </div>
  )
}
export default Counter
