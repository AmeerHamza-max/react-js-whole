import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Component from './Basic1/Component.jsx'
import App from './App.jsx'
import App1 from './App1.jsx'
import App3 from './App3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    <App3 />
    
  </StrictMode>,
)
