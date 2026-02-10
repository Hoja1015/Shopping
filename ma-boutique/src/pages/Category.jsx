import { useParams } from 'react-router-dom';
import { products } from '../product';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { type } = useParams();
  const filtered = type ? products.filter(p => p.category === type) : products;

  return (
    <div className="p-4 md:p-10 min-h-screen">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">{type || "Boutique"}</h1>
        <div className="bg-success/10 text-success px-4 py-2 rounded-xl flex items-center gap-2 border border-success/20">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-[10px] font-black uppercase">Livraison Disponible</span>
        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {filtered.map((p, index) => (
          <ProductCard key={p.id} product={p} index={index} />
        ))}
      </div>
    </div>
  );
}