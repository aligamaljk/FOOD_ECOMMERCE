import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import 'swiper/css';
import { store } from './store/Store.tsx';
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)
