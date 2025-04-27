import React from 'react'

const CounterReducer = () => {
    
  return (
    <div>
      
    </div>
  )
}

export default CounterReducer
const initialState={count:0}
    const counterReducr=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {count:state.count+1};
            case 'decrement':
                return {count:state.count-1};
            case 'incrementByAmount':
                return {count:state.count+action.payload};
            case 'decrementByAmount':
                return {count:state.count-action.payload};
            default:
                return state;
        
        }

    }
    export {initialState,counterReducr};
