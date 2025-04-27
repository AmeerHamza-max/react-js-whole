// // In react you will render lists with some type of loop. The Javascirpt map() array method is generally
// //  the preferred method.
// import React from 'react'

// const Lists = () => {
//     const number=[1,2,3,4,5,6];
//   return (
//     <main>
//       {number.map((number)=>(
//         <ul>
//             <li key={number}>{number}</li>
//         </ul>
//       ))}
//     </main>
//   )
// }

// export default Lists

import React from 'react'

const Lists = () => {
    const userInfo=[
        {
            username:'Hamza',
            email:'ameerhamzarana0000786@gmail.com',
            location:'Sargodha'
        },
        {
            username:'Ameer',
            email:'ameerhamzarana12345@gmail.com',
            location:'New York'
        },
        {
            username:'Adeel Bhai',
            email:'ameerhamzarana12345@gmail.com',
            location:'Germany'
        },
        
        {
            username:'Ali Haider Bhai',
            email:'aliHaider12345@gmail.com',
            location:'Sweden'
        },
        
    ]
  return (
    <main>
      {userInfo.map(({username,email,location})=>(
        <ul key={Math.random()}>
            <li>{username}</li>
            <li>{email}</li>
            <li>{location}</li>
        </ul>
      ))}
    </main>
  )
}

export default Lists
