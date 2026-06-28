import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './App.css';
// import UseStateDemo from './UseStateDemo';
// import ReduxDemo1 from './ReduxDemo1'
// import UserProfile from './components/UserProfile'
import ProductList from './components/ProductList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductList/>
  </React.StrictMode>
);