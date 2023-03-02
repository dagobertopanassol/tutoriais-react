import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AmplifyProvider } from "@aws-amplify/ui-react";
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AmplifyProvider> 
        <App />
    </AmplifyProvider>
  
);

reportWebVitals();
/* var numbers =2;
const sumNumbers = numbers.map((n) => {
    return n + 1;
     
  });
  console.log('N:' +sumNumbers); */
