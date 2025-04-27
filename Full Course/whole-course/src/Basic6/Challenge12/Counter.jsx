import React, { useReducer, useState } from 'react'
import { counterReducr, initialState } from './CounterReducer'

const Counter = () => {
    const[state,dispatch]=useReducer(counterReducr,initialState);
    const [inputValue,setInputValue]=useState(0);
    const handleIncrement=dispatch({type:'increment'}) 
    const handleDecrement=dispatch({type:'decrement'}) ;
    const handleIncrementByone=()=>{
        dispatch({type:'incrementByAmount',payload:Number(inputValue)});
        setInputValue(0);
    }
    const handleDecrementByone=()=>{
        dispatch({type:'decrementByAmount',payload:Number(inputValue)});
        setInputValue(0);
    }
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <input type="number"value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <button onClick={handleIncrementByone}>Add</button>
      <button onClick={handleDecrementByone}>Subtract</button>
    </div>
  )
}

export default Counter
