// useRef Hook provides a way to access and interact with DOM elements or to persist values across renders
//  without causing a re-render
import React, { useRef } from 'react'

const UseRef = () => {
    const element=useRef(null);

    const focusInput=()=>{
        element.current.focus();
        element.current.value='Ameer Hamza'
    }
  return (
    <div>
     <input type="text" ref={element} /> 
     <button onClick={()=>focusInput()}>Focus and Write Hamza</button>
    </div>
  )
}

export default UseRef
