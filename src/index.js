import React from 'react';
import ReactDOM from 'react-dom/client';//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
//F7orm UI Auth //import { ThemeProvider, AmplifyProvider } from "@aws-amplify/ui-react";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; //import { studioTheme } from "./ui-components";  
Amplify.configure(awsconfig);
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <AmplifyProvider> 
            <App />
        </ AmplifyProvider>
    
);

reportWebVitals();
/* var numbers =2;
const sumNumbers = numbers.map((n) => {
    return n + 1;
     
  });
  console.log('N:' +sumNumbers); */
