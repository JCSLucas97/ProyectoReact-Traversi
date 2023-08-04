// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export default function ItemDetailContainer() {
  const [product, setproduct] = useState({});

  let { id } = useParams();

  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promesa.then((res) => setproduct(res)).catch((err) => console.log(err));
  }, [id]);

  const addToCart = (amount) => {
    let data = {
      ...product,
      quantity: amount,
    };
    agregarAlCarrito(data);
    // console.log(data);
  };
  return <ItemDetail addToCart={addToCart} product={product} />;
}
