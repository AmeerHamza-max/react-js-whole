import React from 'react'

const Props1 = ({img,name,age,isMarried,hobbies}) => {
  return (
    <div>
      <img src={img} alt={name} width={200} />
      <h1>
     Name: {name}
    </h1>
    <h2>Age: {age}</h2>
    <h3>isMarried: {isMarried}</h3>
    <h4>Hobbies: {hobbies}</h4>

    </div>
  )
}

export default Props1
