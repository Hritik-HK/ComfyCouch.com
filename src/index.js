import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import Context from './context/CartContext';
import ScrollToTop from './helpers/ScrollToTop';


ReactDOM.render(
  <Router>
  <ScrollToTop />
  <Context>
    <App />
  </Context>
  </Router>
  ,
  document.getElementById('root')
);
