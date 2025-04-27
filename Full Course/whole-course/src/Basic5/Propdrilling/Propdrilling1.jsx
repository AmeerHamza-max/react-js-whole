import React, { Component } from 'react'

const Propdrilling1 = () => {
    const name='Ameer Hamza';
    const Component=({name})=>{
        <h1>{name}</h1>
    }
  return (
    <div>
      <Component name='Ameer Hamza' />
    </div>
  )
}

export default Propdrilling1
