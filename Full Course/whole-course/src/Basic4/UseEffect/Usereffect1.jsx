//Use effect hook allows you to perfomr side effects in your components.Some examples of side effects 
// are fetching data directly updating the DOM etc
// We setup the useeffect hook to run some code when
// Componenet render for the first time
// whenever it re render
// some data in our component changed
import React, { useEffect, useState } from 'react'

const Usereffect1 = () => {
    const [value,setValue]=useState(0);
    const [something,setSomething]=useState(0);
    // if(value>0) it throughs an error you cannot write useeffect in condition

    useEffect(()=>{
        if(value>0){
        console.log('call useeffect');
        document.title=`Increment ${value}`
    }
    },[value,something])

     return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <button onClick={()=>setSomething(something+1)}>Increment by something</button>
    </div>
  )
}

export default Usereffect1
