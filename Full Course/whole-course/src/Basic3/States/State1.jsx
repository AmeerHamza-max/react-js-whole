// State is a way to store and manage data that can change over tiem and affects how the component renders.
// We define state using the useState Hook, which allows you to set an initial value provides a way to update
//  that state.
// Hooks are a new addition in React 16.8 They let you use state and other react features without writing a class.
//useState Hook allow us to track state in a functiona l component. State generally refers to data or properties
// that need to be tracking in an application.
// syntax: 
// const [date,setData]=useState()

import React, { useState } from 'react'

const State1 = () => {
    // const counter=useState(0);
    const [apple,setApple]=useState(0);
    const [friends,setFriends]=useState(['Hamza','Ameer']);
    const updateOneFriend=()=>{
        setFriends(friends.map(f=> f==='Adeel' ? 'Adeel Iqbal':f))
    }
    const removeFriend=()=>{
        setFriends(friends.filter(f=>f!=='Adeel'))
    }
    const addOneFriend=()=>{
        setFriends([...friends,'Adeel'])
    }
  return (
    <div>
      <h1>{apple}</h1>
      <button onClick={()=>setApple(apple+1)}>Increment</button>
      <button onClick={()=>setApple(apple-1)}>Decrement</button>
      {friends.map((f)=>(
        <li key={Math.random()}>{f}</li>
      ))};
      <button onClick={addOneFriend}>Add friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </div>
  )
}

export default State1
