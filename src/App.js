import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CheckoutForm from './components/CheckoutForm';

function App() {

  return (
    <BrowserRouter>
      <CartProvider >
        <NavBar /> 
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:productCategory" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />}></Route>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
