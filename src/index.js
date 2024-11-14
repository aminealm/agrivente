import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ScrollToTop } from "./components";
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={2000}/>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);