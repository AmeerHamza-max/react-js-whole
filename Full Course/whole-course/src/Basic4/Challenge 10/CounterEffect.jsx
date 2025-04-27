import React, { useState } from 'react'

const CounterEffect = () => {
    const [count,setCount]=useState(0);
    useState(()=>{
        document.title=`Count: ${count}`;
    },[count])
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default CounterEffect
