// import { useState } from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [product, setproduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promesa.then((res) => setproduct(res)).catch((err) => console.log(err));
  }, [id]);

  const addToCart = (amount) => {
    // console.log("SE AGREGO AL CARRITO");
    // console.log(product);
    // console.log(amount);
    // console.log(amount * product.price);
    let data = {
      ...product,
      productAmount: amount,
    };
    console.log(data);
  };
  return <ItemDetail addToCart={addToCart} product={product} />;
}
