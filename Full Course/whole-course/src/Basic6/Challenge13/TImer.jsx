import React, { useEffect, useRef, useState } from 'react'

const TImer = () => {
    const [count,setCount]=useState(0);
    const intervalRef=useRef(null);
    useEffect(()=>{
        intervalRef.current=setInterval(() => {
            setCount(prev => prev+1)
        }, 1000);
        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[])
  return (
    <div>
      <h1>Timer:{count} seconds</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop timer</button>
    </div>
  )
}

export default TImer
