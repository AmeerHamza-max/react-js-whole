// Context Api
// ContextAPI is a feature that allows you to manage and share state across your component tree without 
// having to pass props down manually at every level. It's useful for scenarios whre you need to share
// data or functions across many components,especialy when these componenets are deeply nested.
// so we don't need to drill our data 
import React, { createContext } from 'react'
import ContextApi2 from './ContextApi2';
export const Data=createContext();
export const Data1=createContext();
const ContextApi = () => {
    const name='Ameer Hamza';
    const age=22;

    
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider>
            <ContextApi2 />
        </Data1.Provider>
        <ContextApi2/> 
      </Data.Provider> 
    </div>
  )
}

export default ContextApi
