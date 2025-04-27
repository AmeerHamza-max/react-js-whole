import React from 'react'
import { Data, Data1 } from './ContextApi'
const ContextApi2 = () => {
  return (
    <div>
      <Data.Consumer>
        {(name)=>{
            return(<Data1.Consumer>{(age)=>{
                return <h1>My name is {name} and my age is {age} year's old</h1>
            }}</Data1.Consumer>)
        }}
      </Data.Consumer>
    </div>
  )
}

export default ContextApi2
