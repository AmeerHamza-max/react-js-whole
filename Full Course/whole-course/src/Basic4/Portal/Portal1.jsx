// Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy
// of the parent component. this can be useful for scenarios like modals,tooltips, or dropdownsm where you want to 
// break out of the usual parent-child structure and render in a different part of the DOM


import React, { useState } from 'react'
import PopUpContent from './PopUpContent';

const Portal1 = () => {
    const [inputValue,setInputValue]=useState('');
    const [copied,setCopied]=useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),2000)
        })
    }
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <PopUpContent copied={copied} />
    </div>
  )
}

export default Portal1
