import React, { useState } from 'react'

const Profile = () => {
    const [profile,setProfile]=useState({
        name:'',
        age:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setProfile((pre)=>({
            ...pre,[name]:value,
        }))
    }
  return (
    <div>
      <h2>User Profile</h2>
      <label htmlFor="Name">Name</label>
      <input type="text" name='Name' value={profile.name} onChange={handleChange}/>
    <div>
        <label >Age</label>
        <input type="number" value={profile.age} onChange={handleChange} />
    </div>
    <h3>Profile Information</h3>
    <p>Name: {profile.name}</p>
    <p>Age: {profile.age}</p>
    </div>
    
  )
}

export default Profile
