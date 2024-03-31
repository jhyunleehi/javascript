import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function Home(){
  return (
    <div>
    <h2>HOME</h2>
      home...
    </div>
  )
}

function Topics(){
  return (
    <div>
    <h2>TOPIC</h2>
      topics...
    </div>
  )
}

function Contact(){
  return (
    <div>
    <h2>Contact</h2>
      contact...
    </div>
  )
}


function  App(){
  return ( 
    <div className="App">
      <h1>Hello React Router Dom</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/topics">topics</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/topics" element={<Topics/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
