import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/MainRouter/MainRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainRouter />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
