// Props /properties are arguments passed into react components.
// Props allow us to pass data from parent component to child component.
// Props are passed component via the html attribute.
import React from 'react'

const Props = (props) => {
  return (
    <section>
        <p>{props.img}</p>
    <h1>
     Name: {props.name}
    </h1>
    <h2>Age: {props.age}</h2>
    <h3>isMarried: {props.isMarried}</h3>
    <h4>Hobbies: {props.hobbies}</h4>

    </section>
  )
}

export default Props
