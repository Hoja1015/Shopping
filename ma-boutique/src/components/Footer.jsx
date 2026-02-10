import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Fonction pour remonter en haut de page lors d'un clic sur un lien
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Numéro WhatsApp 
  const whatsappNumber = "2250700000000"; 

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 px-6 md:px-12 mt-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* BRAND & LOGO */}
        <div className="space-y-6">
          <Link to="/" onClick={scrollToTop} className="text-3xl font-black italic tracking-tighter">
            B<span className="text-primary">D</span>M'S
          </Link>
          <p className="text-neutral-500 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-wider">
            Élégance urbaine. Livraison express. 
            Le style qui vous définit, partout au cameroun.
          </p>
        </div>

        {/* LOGIQUE DE NAVIGATION : CATEGORIES */}
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 text-primary">Collections</h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-neutral-400">
            <li>
              <Link to="/category/Vêtements" onClick={scrollToTop} className="hover:text-white transition-colors">Vêtements</Link>
            </li>
            <li>
              <Link to="/category/Chaussures" onClick={scrollToTop} className="hover:text-white transition-colors">Chaussures</Link>
            </li>
            <li>
              <Link to="/category/Accessoires" onClick={scrollToTop} className="hover:text-white transition-colors">Accessoires</Link>
            </li>
          </ul>
        </div>

        {/* LOGIQUE DE CONTACT : LIENS DIRECTS */}
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 text-primary">Contact Direct</h4>
          <ul className="space-y-6">
            <li className="group">
              <a href={`tel:${whatsappNumber}`} className="flex flex-col">
                <span className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity">Appel Service Client</span>
                <span className="text-sm font-bold group-hover:text-primary transition-colors">+225 07 00 00 00 00</span>
              </a>
            </li>
            <li className="group">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col"
              >
                <span className="text-sm font-bold group-hover:text-primary transition-colors">Discuter maintenant</span>
              </a>
            </li>
          </ul>
        </div>

        {/* LOCALISATION & MAPS */}
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 text-primary">Boutique Physique</h4>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase italic italic">Cameroun</span>
              <p className="text-[11px] text-neutral-500 font-medium">Angré 7e Tranche, Rue des banques</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">      
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700">
          © {currentYear} BDM'S CLOTHING CO. DÉVELOPPÉ POUR LE SUCCÈS.
        </p>
      </div>
    </footer>
  );
}