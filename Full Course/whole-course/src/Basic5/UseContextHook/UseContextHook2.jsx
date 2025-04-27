import React, { useContext } from 'react'
import { Data, Data1 } from './ContextApi'
const UseContextHook2 = () => {
    const userName=useContext(Data);
    const Userage=useContext(Data1);

  return (
    <div>
        <h1>My name is {userName} and i am {Userage} old</h1>
    </div>
  )
}

export default UseContextHook2
