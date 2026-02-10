import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetails({ product, onClose }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleConfirm = () => {
    if (!size || !color) return alert("Sélectionnez Taille + Couleur");
    
    addToCart({ ...product, selectedSize: size, selectedColor: color });
    onClose();
    
    // Ouvre le panier (CartDrawer) automatiquement
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.checked = true;
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl p-0 rounded-3xl overflow-hidden bg-white border-none shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <img src={product.image} className="md:w-1/2 h-80 md:h-[450px] object-cover" alt="" />
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-black uppercase italic italic">{product.name}</h2>
            <p className="text-2xl font-bold text-primary mt-2">{product.price.toLocaleString()} FCFA</p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-3">Taille</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map(s => (
                    <button key={s} onClick={() => setSize(s)} 
                      className={`h-10 w-12 rounded-xl border-2 font-bold text-xs transition-all ${size === s ? 'bg-black border-black text-white' : 'border-neutral-100'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-3">Couleur</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors?.map(c => (
                    <button key={c} onClick={() => setColor(c)} 
                      className={`px-4 py-2 rounded-xl border-2 font-bold text-[10px] uppercase transition-all ${color === c ? 'bg-black border-black text-white' : 'border-neutral-100'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={handleConfirm} className="btn-moda bg-primary text-white mt-8 w-full shadow-lg shadow-primary/20">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-4 top-4 bg-white/80 border-none">✕</button>
      </div>
      <div className="modal-backdrop bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
    </div>
  );
}