import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartContainer() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Este es el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
          </div>
        );
      })}
    </div>
  );
}
