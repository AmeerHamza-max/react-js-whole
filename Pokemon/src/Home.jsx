import React, { useContext } from 'react'
import { BioContext } from './ContextApi'

const Home = () => {
    const {myName,age}=useContext(BioContext)
  return (
    <div>
      <h1>Hello my Name is {{myName}} and I am {age}</h1>
    </div>
  )
}

export default Home
