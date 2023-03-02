import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
/* var numbers =2;
const sumNumbers = numbers.map((n) => {
    return n + 1;
     
  });
  console.log('N:' +sumNumbers); */
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
