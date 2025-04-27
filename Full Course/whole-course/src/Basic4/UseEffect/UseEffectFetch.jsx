import React, { useEffect, useState } from 'react'

const UseEffectFetch = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function getData(){
            const res=await fetch('Link');
            const data=await res.json();
            if(data && setData(data));
        }
        getData();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UseEffectFetch
