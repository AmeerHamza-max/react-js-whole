import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{

    })
  return (
    <div>
        <ul>
      {data.map((todo)=>(
        <li key={Math.random}>{todo.title}</li>
      ))}</ul>
    </div>
  )
}

export default UseEffect3
