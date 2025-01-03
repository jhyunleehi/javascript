import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';


//ReactDOM.render (<App/>, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);