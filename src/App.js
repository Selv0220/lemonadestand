
import './App.css';
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from "./components/cartPage";

function App() {
  return (
      <BrowserRouter>
      
      <div>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element = {<ProductCard /> } />
        <Route exact path ="/cart" element = {<CartPage /> } />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;