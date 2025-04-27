import React from 'react'

const Copy = () => {
    const copyHandler=()=>{
        console.log('Stop stealing my content')
    }
  return (
    <div>
      <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum quibusdam eius, animi facere delectus commodi, hic velit consequatur officia, quis voluptas nobis odit rerum quasi ducimus vero modi sed!</p>

    </div>
  )
}

export default Copy
