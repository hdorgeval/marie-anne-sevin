import 'bootstrap-icons/font/bootstrap-icons.css';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './bs-extensions.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
