import React, { useState } from 'react'

const State3 = () => {
 const [movie,setMovie]= useState([
        {
            id:1,title:'Spider Man',ratings:3
        },
        {
            id:2,title:'Super man',ratings:6
        },
        {
            id:3,title:'The rock',ratings:3
        }
    ])
    const handleClick=()=>{
        setMovie(movie.map((m)=>m.id===1 ?{...movie,title:'Jhone Wick'}:m))
    }
  return (
    <div>
      {movie.map((m)=>(
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default State3
