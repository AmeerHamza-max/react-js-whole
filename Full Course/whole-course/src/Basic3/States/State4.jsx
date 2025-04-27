import React, { useState } from 'react'

const State4 = ({count,onclickhandler}) => {
    const clickhandler=()=>onclickhandler();
    
  return (
    <div>
      <p>{count}</p>
      <button onClick={clickhandler}>Increment</button>
    </div>
  )
}

export default State4
