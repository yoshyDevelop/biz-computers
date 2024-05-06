import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from "react-use-cart";
import ShoppingCart from './pages/ShoppingCart';
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#eee" }}>
      
      <CartProvider>
        <Navbar />
          {/* <ShoppingCart /> */}
          <MDBContainer className='my-3' breakpoint="sm" >
            <Outlet/>
          </MDBContainer>
          
        <Footer />
      </CartProvider>

    </div>
  );
}

export default App;
