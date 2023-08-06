// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export default function ItemDetailContainer() {
  const [product, setproduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promesa.then((res) => setproduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (amount) => {
    let data = {
      ...product,
      quantity: amount,
    };
    addToCart(data);
    Swal.fire("Productos agregados con éxito!", "", "success");
    // console.log(data);
  };
  return (
    <ItemDetail
      agregarAlCarrito={agregarAlCarrito}
      product={product}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
}
