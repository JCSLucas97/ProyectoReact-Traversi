import { Button } from "@mui/material";

export default function Checkout({ handleSubmit, handleChange, orderId }) {
  return (
    <div>
      <div>
        <h1>Checkout</h1>
        {!orderId ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese su telefono"
              name="phone"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese su email"
              name="email"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </form>
        ) : (
          <h3>Su orden de compra es: {orderId}</h3>
        )}
      </div>
    </div>
  );
}
