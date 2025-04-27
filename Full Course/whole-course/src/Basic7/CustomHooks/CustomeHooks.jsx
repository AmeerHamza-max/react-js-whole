// Custome Hooks are javascript functions that start with the prefix use (e.g. useFetch,useForm) and can 
// call other hooks within them. They allow you to extract and reuse logic that involves state or side 
// effects making your components more readable and maintainable.
import React, { useState } from 'react'

const CustomeHooks = () => {
    const useFetch=(url)=>{
        const[data,setData]=useState(null);

    }
    const [data]=useFetch('https;//jsonplaceholder.typicode.com/todos');
    // https;//jsonplaceholder.typicode.com/todos
    // const [data,setData]=useState(0);
  useEffect(()=>{
    fetch(url).then((res)=>res.json()).then((data)=>setData(data));
  },[])
  return (
    <div>
      {data && data.map((item)=>(
        <ul key={item.id}><li>{item.title}</li></ul>
      ))}
    </div>
  )
}

export default CustomeHooks
