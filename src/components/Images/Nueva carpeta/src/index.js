import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './Redux/store.js'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter> 
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );