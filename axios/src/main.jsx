import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Project from './Project3/Project'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Project />
  </StrictMode>,
)
