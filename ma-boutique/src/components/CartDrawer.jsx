import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, total, removeFromCart, sendOrderWhatsApp } = useCart();

  return (
    <div className="drawer-side z-[100]">
      <label htmlFor="cart-drawer" className="drawer-overlay"></label>
      <div className="p-8 w-80 md:w-96 min-h-full bg-white flex flex-col">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-10">Mon Panier</h2>
        
        <div className="flex-grow overflow-y-auto space-y-6">
          {cart.map((item) => (
            <div key={item.cartId} className="flex gap-4 items-center animate-in slide-in-from-right duration-300">
              <img src={item.image} className="w-16 h-20 object-cover rounded-2xl" alt="" />
              <div className="flex-grow">
                <p className="text-[10px] font-black uppercase truncate w-32">{item.name}</p>
                <p className="text-[9px] font-bold text-neutral-400 uppercase">{item.selectedSize} | {item.selectedColor}</p>
                <p className="text-primary font-bold text-xs mt-1">{item.price.toLocaleString()} FCFA</p>
              </div>
              <button onClick={() => removeFromCart(item.cartId)} className="btn btn-ghost btn-xs text-error">✕</button>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-neutral-100 mt-6">
          <div className="flex justify-between items-end mb-6">
            <span className="text-[10px] font-black uppercase opacity-40">Total</span>
            <span className="text-2xl font-black italic">{total.toLocaleString()} FCFA</span>
          </div>
          <button onClick={sendOrderWhatsApp} className="btn-moda bg-primary text-white w-full">
            COMMANDER WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
}