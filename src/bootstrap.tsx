import "./index.css"
import { HashRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "app_container/Header"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <App />
    </HashRouter>
  </React.StrictMode>

);
