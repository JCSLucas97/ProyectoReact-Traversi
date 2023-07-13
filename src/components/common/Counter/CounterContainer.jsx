import { useState } from "react";
import Counter from "./Counter";

export default function CounterContainer({ addToCart, stock }) {
  const [counter, setCounter] = useState(1);

  return (
    <Counter
      stock={stock}
      counter={counter}
      setCounter={setCounter}
      addToCart={addToCart}
    />
  );
}
