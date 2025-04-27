import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('');
            const data=await res.json();
            setPosts(data);
        }
        fetchData();
    },[])
  return (
    <div>
      <h1>First Post Title</h1>
      {posts.length>0 ? <h2>{posts[0].title}</h2>:<p>Loading ...</p>}
    </div>
  )
}

export default FetchDataEffect
