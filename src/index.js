import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer, {productsFetch} from "./features/productSlice";
import cartReducer, { getTotals } from './features/cartSlice';


const store = configureStore({
  reducer:{
    cart: cartReducer,
    products: productsReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
