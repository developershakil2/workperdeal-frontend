import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scass/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
