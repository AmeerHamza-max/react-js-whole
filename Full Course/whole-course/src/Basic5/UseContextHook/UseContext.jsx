// UseContext Hook allows us to access the context values provided by a context object directly within a functional
// component.Context provides a way to pass data through the component tree without having to pass props
// down manyalt at every level.
// Context Api
// ContextAPI is a feature that allows you to manage and share state across your component tree without 
// having to pass props down manually at every level. It's useful for scenarios whre you need to share
// data or functions across many components,especialy when these componenets are deeply nested.
// so we don't need to drill our data 
import React, { createContext, useContext } from 'react'
// import ContextApi2 from './ContextApi2';
export const Data=createContext();
export const Data1=createContext();
const UseContext = () => {
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

export default UseContext;

