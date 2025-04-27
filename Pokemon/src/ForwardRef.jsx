import React, { forwardRef ,useId,useRef} from 'react'
const InputComponent=forwardRef((props,ref)=>{
    return(
        <input ref={ref} {...props} />
    )
})
const ForwardRef = () => {
    
    const HHHH=useRef(null);
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(HHHH.current.value);
    }
    const userid=useId();

  return (
    <div>
        
        <h1>This is Example of UseRef</h1>
        <form onSubmit={submitHandler}>
        <InputComponent ref={HHHH} />
        <button type='submit' id={userid.first}>Submit</button>
        <button id={userid.second}></button>
        </form>
    </div>
    
    
      
      
    
  )
}

export default ForwardRef
