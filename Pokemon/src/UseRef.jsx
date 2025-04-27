import React, { useRef } from 'react'

const UseRef = () => {
    const HHHH=useRef(null);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(HHHH.current.value);
        
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter your name' ref={HHHH} />
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UseRef
