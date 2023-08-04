import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    setCart([...cart, product]);
  };

  // const deleteById = () => {};

  let data = {
    cart,
    agregarAlCarrito,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
