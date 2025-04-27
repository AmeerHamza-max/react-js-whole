import React, { createContext } from 'react'
export const BioContext=createContext();

    
const ContextApi = ({children}) => {
    const myName="Hamza";
    const age=14;
  return (
    
      <BioContext.Provider value={{myName,age}}>{children}</BioContext.Provider>

    
  )
}

export default ContextApi
