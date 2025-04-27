import React from 'react'

const State44 = ({count,onclickhandler}) => {
    const handleClick=()=>onclickhandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default State44
