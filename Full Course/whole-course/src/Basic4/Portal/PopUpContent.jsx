import React from 'react'
import { createPortal } from 'react-dom'

const PopUpContent = ({copied}) => {
  return createPortal(
    <div>
      {copied && (
        <div style={{position:'absolute',bottom:'3rem'}}>Copied To clipboard</div>
      )}
    </div>,
    document.querySelector('#popup-content')
  )
}

export default PopUpContent
