import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from "react-use-cart";
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <CartProvider>
        <Navbar />
          <ShoppingCart />
          <Outlet/>
        <Footer />
      </CartProvider>

    </div>
  );
}

export default App;
