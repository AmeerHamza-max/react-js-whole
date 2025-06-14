import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/Index.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <Provider store={store}>
      // <BrowserRouter>
        // <App />                        //Commented part is for Cart Website
      // </BrowserRouter>
    // </Provider>
  // </StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  
);
