// useReducer is a hook that is similar to usestate but it is desigend for more complex state objects or
// state transitions that invloves multiple sub-values. It allows you to manage state in a functional,
// immutable way.
import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialState={count:0};
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {...state,count:state.count+1}
            case 'decrement':
                return {...state,count:state.count-1}
            case 'reset':
                return {...state,count:0}
        }
        
    }
const [state,dispatch]= useReducer(reducer,initialState);

  return (
    <div>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      <h1>Count:{state.count}</h1>
    </div>
  )
}

export default UseReducer
