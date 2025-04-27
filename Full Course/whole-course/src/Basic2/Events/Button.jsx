import React from 'react'

const Button = () => {
  const handleClick=()=>{
    alert('You click me ')
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button
