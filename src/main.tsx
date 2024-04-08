import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Provider } from "react-redux";
import { store } from './apps/State/Store';
store
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="gray" appearance="light" grayColor="sand" radius="large" scaling="100%">
         <Provider store={store}>
         <App />
           </Provider> 
        </Theme>
  </React.StrictMode>
)
