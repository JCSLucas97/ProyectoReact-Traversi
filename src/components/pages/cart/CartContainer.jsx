import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      <h2 style={{ color: "red" }}>TOTAL: ${total}</h2>

      {cart.length > 0 && (
        <>
          <Button variant="outlined" onClick={clearCart}>
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined">terminar compra</Button>
          </Link>
        </>
      )}
    </div>
  );
}
