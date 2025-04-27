import React from 'react'
import './Index.css'

const InlineStyle = () => {
    const styles={color:'red',backgroundColor:'blue',padding:'2rem'}
  return (
    <div>
      {/* <h1 style={{color:'red',backgroundColor:'blue',padding:'2rem'}}>Inline Style</h1> */}
      {/* <h1 style={styles}>Inline Style</h1> */}
      <span>Separate file for styling</span>
    </div>
  )
}

export default InlineStyle
