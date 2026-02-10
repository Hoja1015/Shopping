import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/NavBar';
import CartDrawer from './components/CartDrawer';
import Category from './pages/Category';
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="drawer drawer-end min-h-screen">
          <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Navbar />
            <main className="flex-grow bg-white"><Routes>
              <Route path="/" element={<Category />} />
              <Route path="/category/:type" element={<Category />} />
            </Routes></main>
          </div>
          <CartDrawer />
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}