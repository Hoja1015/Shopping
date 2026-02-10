import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-green-500 text-white text-[10px] py-2 text-center font-black tracking-[0.2em]">
        🚀 LIVRAISON 24h/48h • CAMEROUN
      </div>

      <nav className="navbar bg-white/80 backdrop-blur-md border-b border-neutral-100 px-4 md:px-10 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-3xl w-64 font-black uppercase text-xs gap-2 border border-neutral-50">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/category/Vêtements">Vêtements</Link></li>
              <li><Link to="/category/Chaussures">Chaussures</Link></li>
              <li><Link to="/category/Accessoires">Accessoires</Link></li>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-black italic tracking-tighter text-neutral-900">B<span className="text-primary">D</span>M'S</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 font-black uppercase text-[11px] tracking-widest text-neutral-600">
            <li className="hover:text-primary transition-colors"><Link to="/">Accueil</Link></li>
            <li className="hover:text-primary transition-colors"><Link to="/category/Vêtements">Vêtements</Link></li>
            <li className="hover:text-primary transition-colors"><Link to="/category/Chaussures">Chaussures</Link></li>
            <li className="hover:text-primary transition-colors"><Link to="/category/Accessoires">Accessoires</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <label htmlFor="cart-drawer" className="btn btn-ghost btn-circle relative bg-neutral-50 hover:bg-neutral-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-black animate-bounce">
                {cart.length}
              </span>
            )}
          </label>
        </div>
      </nav>
    </header>
  );
}