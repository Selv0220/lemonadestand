
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from "./components/cartPage";
import Productside from './components/Productside';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element = {<ProductCard /> } />
        <Route path ="/products" element = {<Productside /> } />
        <Route exact path ="/cart" element = {<CartPage /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;