import React, { useState } from 'react'

const State2 = () => {
    const [movie,setMovie]=useState({
        title:'Equlizer 3',
        rating:7,
    })
    const handleClick=()=>{
    //  const copymovie={   ...movie,rating:5}
    //  setMovie(copymovie)
    setMovie({...movie,rating:5});

    }
    
  return (
    <div>
      <h1>Title :{movie.title}</h1>
      <p>Rating:{movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  )
}

export default State2
