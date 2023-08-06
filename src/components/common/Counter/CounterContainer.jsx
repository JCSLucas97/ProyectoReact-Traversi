import { useState } from "react";
import Counter from "./Counter";

export default function CounterContainer({
  agregarAlCarrito,
  stock,
  cantidadEnCarrito = 1,
}) {
  const [counter, setCounter] = useState(cantidadEnCarrito);

  return (
    <Counter
      cantidadEnCarrito={cantidadEnCarrito}
      stock={stock}
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
}
