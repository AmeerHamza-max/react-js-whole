import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import UseRef from './UseRef'
// import ForwardRef from './ForwardRef'
// import ContextApi from './ContextApi'
// import Home from './Home'
import UserReducer from './UserReducer'
// import Pokemon from '../Pokemon'
// import './index.css'
// import App from './App.jsx'
// import { Pokemon } from './Pokemon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Pokemon /> */}
    {/* <ForwardRef /> */}
    {/* <UseRef /> */}
    {/* <ContextApi > */}
      {/* <Home /> */}
    {/* </ContextApi> */}
    <UserReducer />
  </StrictMode>,
)
