import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartContainer() {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  return (
    <div>
      <h1>Carrito</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid #000", margin: "5px" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar carrito</button>

      <h2 style={{ color: "red" }}>TOTAL: ${total}</h2>
      <button>Continuar a pagar</button>
    </div>
  );
}
