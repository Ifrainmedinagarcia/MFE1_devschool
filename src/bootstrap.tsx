import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "app_container/Header"
import Footer from "app_container/Footer"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

