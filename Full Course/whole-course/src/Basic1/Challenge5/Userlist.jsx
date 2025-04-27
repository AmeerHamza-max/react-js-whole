import React from 'react'

const Userlist = () => {
    const user=[
        {
            id:1,
            name:'Hamza',
            age:22,
        },
        {
            id:1,
            name:'Ali',
            age:25,
        },
        {
            id:1,
            name:'Adeel',
            age:24,
        }
    ]
  return (
    <div>
        {
            user.map((user)=>(
                <div>
                    <h1>Name:{user.name}</h1>
                    <h1>Age:{user.age}</h1>
                </div>
            ))
        }
      
    </div>
  )
}

export default Userlist
