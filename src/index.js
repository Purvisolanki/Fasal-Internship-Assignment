import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter >
        <Toaster />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
