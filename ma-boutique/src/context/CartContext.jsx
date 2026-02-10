import { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // On ajoute un ID unique pour pouvoir supprimer précisément un article
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price, 0), [cart]);

  const sendOrderWhatsApp = () => {
    const phone = "+237693952913"
    let text = "👋 *Nouvelle commande chez BDM'S :*\n\n";
    cart.forEach(item => {
      text += `• *${item.name}*\nTaille: ${item.selectedSize} | Couleur: ${item.selectedColor}\n${item.price.toLocaleString()} FCFA\n\n`;
    });
    text += `💰 *TOTAL: ${total.toLocaleString()} FCFA*`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, sendOrderWhatsApp }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);