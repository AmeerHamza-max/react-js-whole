import React from 'react'

const Move = () => {
    const moveHandler=()=>{
        alert('Mouse Move event fired');
        console.log('Mouse move event fired')
    }
  return (
    <div>
      <p onMouseMove={moveHandler}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum delectus nemo eligendi, consectetur reiciendis iste vero dolore accusamus possimus harum praesentium eaque beatae iusto porro ullam distinctio at. Atque, repudiandae!</p>

    </div>
  )
}

export default Move
