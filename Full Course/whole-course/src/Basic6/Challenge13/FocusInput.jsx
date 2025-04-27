import React, { useRef } from 'react'

const FocusInput = () => {
    const inputref=useRef(null);
    const Hang=()=>{
        if(inputref.current){
            inputref.current.focus()
        }
    }
    
  return (
    <div>
      <input type="text" ref={inputref} placeholder='Click the button to focus' />
      <button onClick={()=>Hang()}>Focus Input</button>
    </div>
  )
}

export default FocusInput
