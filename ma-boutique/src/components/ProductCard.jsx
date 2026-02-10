import { useState } from 'react';
import ProductDetails from './ProductDetails';

export default function ProductCard({ product, index }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(true)} className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-neutral-100 relative">
          <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div className="mt-4 text-center px-2">
          <h3 className="text-[11px] font-black uppercase tracking-tighter truncate">{product.name}</h3>
          <p className="text-primary font-bold text-sm mt-1">{product.price.toLocaleString()} FCFA</p>
        </div>
      </div>
      {show && <ProductDetails product={product} onClose={() => setShow(false)} />}
    </>
  );
}