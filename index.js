// index.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from './reportWebVitals';
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from "react-router-dom";
//import { createStore} from 'redux';
import {Provider} from 'react-redux'
import store from './redux/reducer.js/store';

//import RIndex from './Services/Reducers/R index';
//const store=createStore(RIndex)

const root = ReactDOM.createRoot(document.getElementById('root'));

//ReactDOM.createRoot(document.getElementById("root")).render(

root.render(
  <React.StrictMode>
 <BrowserRouter>
 <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
      
       </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
