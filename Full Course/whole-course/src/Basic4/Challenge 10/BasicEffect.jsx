import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log('Basic Effect Mounted')
    })
  return (
    <div>
    <h1>Baisc Effects</h1>
    </div>
  )
}

export default BasicEffect
