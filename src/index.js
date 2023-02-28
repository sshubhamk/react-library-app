import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from './context/Books';


const root = document.getElementById('root');
const el = ReactDOM.createRoot(root);

el.render(
  <Provider>
    <App />
  </Provider>
);